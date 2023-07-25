import { IndexType } from '@aboutbits/pagination'
import { action } from '@storybook/addon-actions'
import { zodResolver } from '@hookform/resolvers/zod'
import { Markdown, Primary, Title } from '@storybook/addon-docs'
import { Meta, StoryFn } from '@storybook/react'
import { useEffect, useState } from 'react'
import { DefaultValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import IconCheck from '@aboutbits/react-material-icons/dist/IconCheck'
import {
  ContentArea,
  DescriptionItem,
  DescriptionItemContentAlignVertical,
  Section,
  SectionContainer,
  SectionContent,
  SectionContentLayout,
  SectionFooterWithSubmit,
  SectionHeader,
} from '../components'
import { Alert } from '../components/alert'
import {
  FieldSetIndent,
  FormError,
  Option,
  ToggleSwitchLayout,
} from '../components/form'
import {
  CheckboxFormField,
  FieldsetFormField,
  Form,
  InputFormField,
  PaginatedResponse,
  RadioFormField,
  SearchQueryParameters,
  SelectFormField,
  SelectItemFormField,
  TextAreaFormField,
  ToggleSwitchFormField,
  useHandleSubmit,
} from '../components/react-hook-form'
import { Tone } from '../components/types'

const meta = {
  component: Form,
  argTypes: {
    form: { table: { disable: true } },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            The following shows how a potential form could look like.
          </Markdown>
          <Markdown>
            [React Hook Form](https://react-hook-form.com/) is required to
            handle the form. [zod](https://zod.dev/) is used in this
            demonstration to validate the form against a schema.
          </Markdown>
          <Markdown>
            The bridge from `React Hook Form` to `zod` is made by `zodResolver`,
            which is imported from `@hookform/resolvers/zod`. If you want to use
            `zod` in your project like it is done here, install the packages
            `zod` and `@hookform/resolvers`.
          </Markdown>
          <Markdown>
            Validation error messages can be translated using a library like
            [@aboutbits/zod-locales-formatjs](https://github.com/aboutbits/zod-locales-formatjs).
          </Markdown>
          <Primary />
        </>
      ),
    },
  },
} satisfies Meta<typeof Form>

export default meta
type Story = StoryFn<typeof Form>

const UI_MODES = ['LIGHT', 'DARK'] as const
const uiModeSchema = z.enum(UI_MODES)

const LANGUAGES = ['EN', 'DE', 'IT'] as const
const languageSchema = z.enum(LANGUAGES)

const ROLES = ['USER', 'ADMIN'] as const
const roleSchema = z.enum(ROLES)

type Project = {
  id: number
  name: string
}

const useGetData = ({
  search,
  page,
  size,
}: SearchQueryParameters): {
  data?: PaginatedResponse<Project>
  error?: Error
} => {
  const [data, setData] = useState<Project[] | undefined>()

  useEffect(() => {
    setData(undefined)
    setTimeout(() => {
      setData(
        Array.from(Array(200).keys())
          .map(
            (index): Project => ({
              id: index,
              name: `Project ${index}`,
            }),
          )
          .filter((project) =>
            search !== undefined ? project.name.includes(search) : true,
          ),
      )
    }, 1000)
  }, [search, page, size])

  if (data === undefined) {
    return {}
  }

  return {
    data: {
      items: data.slice(page * size, page * size + size),
      currentPage: page,
      perPage: size,
      total: data.length,
    },
  }
}

export const UserEdit: Story = () => {
  const [showSuccess, setShowSuccess] = useState(false)

  const personSchema = z.object({
    username: z
      .string()
      .min(3)
      .refine((val) => !val.includes(' '), {
        message: 'Space characters are not allowed',
      }),
    email: z.string().email(),
    name: z.object({
      first: z.string().min(3),
      last: z.string().min(3),
    }),
    language: languageSchema,
    role: roleSchema,
    bio: z.string().nullable(),
    favProjectId: z.number().nullable(),
    uiMode: uiModeSchema,
    privacy: z.boolean().transform((v, ctx) => {
      if (v) {
        return v
      }
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'You must accept the privacy policy',
      })
      return z.NEVER
    }),
    serverValidationErrors: z.boolean(),
  })

  type Person = z.output<typeof personSchema>
  type PersonIn = z.input<typeof personSchema>
  const defaultProject: Project = { id: 1, name: 'Project 1' }
  const defaultPerson: DefaultValues<PersonIn> = {
    username: 'john.doe',
    email: 'john@aboutbits.it',
    name: {
      first: 'John',
      last: 'Doe',
    },
    language: 'EN',
    role: 'USER',
    bio: 'John is a software engineer from Bolzano, Italy',
    favProjectId: defaultProject.id,
    privacy: false,
    serverValidationErrors: false,
  }

  const form = useForm<PersonIn, unknown, Person>({
    resolver: zodResolver(personSchema),
    defaultValues: defaultPerson,
  })

  const { triggerSubmit, apiErrorMessage } = useHandleSubmit(form, (data) => {
    setShowSuccess(false)
    return new Promise<void>((resolve, reject) =>
      setTimeout(() => {
        if (data.serverValidationErrors) {
          reject({
            isAxiosError: true,
            response: {
              data: {
                message: 'Oops, something went wrong.',
                errors: {
                  'name.first': [
                    'This is not a good name',
                    'Please choose another name',
                  ],
                  bio: ['Please provide a better bio'],
                },
              },
            },
          })
          return
        }

        action('onSubmit')(data)
        setShowSuccess(true)
        resolve()
      }, 1000),
    )
  })

  return (
    <ContentArea>
      <Form form={form} onSubmit={triggerSubmit} className="space-y-3">
        <Section>
          <SectionHeader title="User edit" />
          <SectionContainer>
            <SectionContent layout={SectionContentLayout.twoColumnGrid}>
              <DescriptionItem
                title="ID"
                content="42"
                contentProps={{
                  alignVertical: DescriptionItemContentAlignVertical.center,
                }}
              />
              <InputFormField
                id="username"
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                required
              />
              <FieldsetFormField
                label="Name"
                fields={['name.first', 'name.last']}
                indent={FieldSetIndent.label}
                showRequired
              >
                <div className="flex flex-col justify-between gap-3 md:flex-row [&>*]:flex-1">
                  <InputFormField
                    id="name.first"
                    type="text"
                    name="name.first"
                    placeholder="First name"
                    required
                  />
                  <InputFormField
                    id="name.last"
                    type="text"
                    name="name.last"
                    placeholder="Last name"
                    required
                  />
                </div>
              </FieldsetFormField>
              <InputFormField
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
                required
              />
              <SelectFormField
                id="language"
                name="language"
                label="Language"
                required
              >
                <Option value="EN">English</Option>
                <Option value="DE">German</Option>
                <Option value="IT">Italian</Option>
              </SelectFormField>
              <SelectFormField id="role" name="role" label="Role" required>
                <Option value="">Select a role...</Option>
                <Option value="ADMIN">Admin</Option>
                <Option value="USER">User</Option>
              </SelectFormField>
              <TextAreaFormField
                id="bio"
                rows={3}
                className="xl:col-span-full"
                name="bio"
                label="Bio"
              />
              <SelectItemFormField
                name="favProjectId"
                label="Favorite Project"
                placeholder="Project"
                dialogTitle="Projects"
                dialogLabel="Projects"
                noSearchResults="No projects available."
                initialItem={defaultProject}
                extractIdFromItem={(item) => item.id}
                renderListItem={(item) => item.name}
                renderErrorMessage={(error) => error.message}
                useGetData={useGetData}
                paginationConfig={{ indexType: IndexType.ZERO_BASED }}
              />
              <FieldsetFormField
                label="Preferred UI mode"
                fields={['uiMode']}
                className="space-y-4"
                showRequired
              >
                {UI_MODES.map((mode) => (
                  <RadioFormField
                    key={mode}
                    name="uiMode"
                    label={mode.charAt(0) + mode.slice(1).toLowerCase()}
                    value={mode}
                  />
                ))}
              </FieldsetFormField>
              <FieldsetFormField
                label="Privacy"
                fields={['privacy']}
                indent={FieldSetIndent.labelAndChildren}
              >
                <CheckboxFormField
                  name="privacy"
                  label="Accept the privacy policy"
                  applyInputHeight
                />
              </FieldsetFormField>
              <FieldsetFormField
                label="Server validation"
                fields={['serverValidationErrors']}
                indent={FieldSetIndent.labelAndChildren}
              >
                <ToggleSwitchFormField
                  name="serverValidationErrors"
                  label="Enable server validation errors"
                  layout={ToggleSwitchLayout.spaceBetween}
                  applyInputHeight
                />
              </FieldsetFormField>
              {showSuccess && (
                <Alert
                  tone={Tone.success}
                  icon={IconCheck}
                  className="xl:col-span-full"
                >
                  Submitted!
                </Alert>
              )}
              <FormError>{apiErrorMessage}</FormError>
            </SectionContent>
            <SectionFooterWithSubmit />
          </SectionContainer>
        </Section>
      </Form>
    </ContentArea>
  )
}
