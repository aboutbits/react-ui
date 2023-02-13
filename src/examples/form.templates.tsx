import { IndexType } from '@aboutbits/pagination'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useHandleFormSubmission } from '../components/apiHooks'
import { SubmitButton } from '../components/button'
import {
  ContentArea,
  DescriptionItem,
  DescriptionItemContentAlignVertical,
} from '../components/content'
import {
  Checkbox,
  FieldSet,
  FieldSetIndent,
  Form,
  FormError,
  Input,
  Option,
  Select,
  TextArea,
  ToggleSwitch,
  ToggleSwitchLayout,
} from '../components/form'
import {
  PaginatedResponse,
  SearchQueryParameters,
  SelectItem,
} from '../components/form/async'
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionContentLayout,
  SectionFooterWithActions,
  SectionHeader,
} from '../components/section'

const formSchema = z.object({
  username: z.string().min(3),
  email: z.string().email().min(1),
  name: z.object({
    first: z.string().min(3),
    last: z.string().min(3),
    nick: z.string().nullable(),
  }),
  age: z.number().min(0),
  medals: z.number().min(1).nullable(),
  language: z.string().min(1),
  role: z.string().min(1),
  bio: z.string(),
  favProjectId: z.string().nullable(),
  serverValidationErrors: z.boolean(),
})

type FormData = z.infer<typeof formSchema>

const defaultValues: FormData = {
  username: 'john.doe',
  email: 'john@aboutbits.it',
  name: {
    first: 'John',
    last: 'Doe',
    nick: null,
  },
  age: 25,
  medals: null,
  language: 'EN',
  role: 'USER',
  bio: 'John is a software engineer from Bolzano, Italy',
  favProjectId: '1',
  serverValidationErrors: false,
}

export function FormExampleTemplate({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void
}): ReactElement {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  const submitAction = useCallback(
    (data: FormData) =>
      new Promise<void>((resolve, reject) =>
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
                    privacy: ['You must accept the privacy policy'],
                  },
                },
              },
            })
            return
          }
          onSubmit(data)
          resolve()
        }, 1000)
      ),
    [onSubmit]
  )

  const { onSubmit: onSubmitHandler, apiErrorMessage } =
    useHandleFormSubmission(form, submitAction)

  return (
    <ContentArea>
      <Form form={form} onSubmit={onSubmitHandler} className="space-y-3">
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
              <Input
                id="username"
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
              />
              <FieldSet
                label="Name"
                fields={['name.first', 'name.last']}
                indent={FieldSetIndent.label}
              >
                <div className="flex md:flex-row flex-col justify-between gap-3 [&>*]:flex-1">
                  <Input
                    id="name.first"
                    type="text"
                    name="name.first"
                    placeholder="First name"
                  />
                  <Input
                    id="name.last"
                    type="text"
                    name="name.last"
                    placeholder="Last name"
                  />
                  <Input
                    id="name.nick"
                    type="text"
                    name="name.nick"
                    placeholder="Nickname"
                  />
                </div>
              </FieldSet>
              <Input
                id="age"
                type="number"
                name="age"
                placeholder="Age"
                label="Age"
              />
              <Input
                id="medals"
                type="number"
                name="medals"
                placeholder="Medals"
                label="Medals"
              />
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
              />
              <Select id="language" name="language" label="Language">
                <Option value="EN">English</Option>
                <Option value="DE">German</Option>
                <Option value="IT">Italian</Option>
              </Select>
              <Select id="role" name="role" label="Role">
                <Option value="ADMIN">Admin</Option>
                <Option value="USER">User</Option>
              </Select>
              <TextArea
                id="bio"
                rows={3}
                className="xl:col-span-full"
                name="bio"
                label="Bio"
              />
              <SelectItem<Project, Error>
                id="favProjectId"
                name="favProjectId"
                label="Favorite Project"
                placeholder="Project"
                dialogTitle="Projects"
                dialogLabel="Projects"
                noSearchResults="No projects available."
                initialItem={{ id: 1, name: 'Project 1' }}
                extractIdFromItem={(item) => item.id.toString()}
                renderListItem={(item) => item.name}
                renderErrorMessage={(error) => error.message}
                useGetData={useGetData}
                paginationConfig={{ indexType: IndexType.ZERO_BASED }}
              />
              <FieldSet
                label="Privacy"
                fields={['privacy']}
                indent={FieldSetIndent.labelAndChildren}
              >
                <Checkbox
                  name="privacy"
                  label="Accept the privacy policy"
                  applyInputHeight
                />
              </FieldSet>
              <FieldSet
                label="Server validation"
                fields={['serverValidationErrors']}
                indent={FieldSetIndent.labelAndChildren}
              >
                <ToggleSwitch
                  name="serverValidationErrors"
                  label="Enable server validation errors"
                  layout={ToggleSwitchLayout.spaceBetween}
                  applyInputHeight
                />
              </FieldSet>
              <FormError>{apiErrorMessage}</FormError>
            </SectionContent>
            <SectionFooterWithActions>
              <SubmitButton>Save</SubmitButton>
            </SectionFooterWithActions>
          </SectionContainer>
        </Section>
      </Form>
    </ContentArea>
  )
}

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
            })
          )
          .filter((project) => (search ? project.name.includes(search) : true))
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
