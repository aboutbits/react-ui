import { IndexType } from '@aboutbits/pagination'
import { yupResolver } from '@hookform/resolvers/yup'
import { ReactElement, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import {
  ContentArea,
  DescriptionItem,
  DescriptionItemContentAlignVertical,
} from '../components/content'
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
import {
  Section,
  SectionContainer,
  SectionContent,
  SectionContentLayout,
  SectionFooterWithSubmit,
  SectionHeader,
} from '../components/section'

enum UiMode {
  Light = 'light',
  Dark = 'dark',
}

type FormData = {
  email: string
  name: {
    first: string
    last: string
  }
  language: string
  role: string
  bio: string
  favProjectId: string | null
  serverValidationErrors: boolean
}

const defaultValues = {
  username: 'john.doe',
  email: 'john@aboutbits.it',
  name: {
    first: 'John',
    last: 'Doe',
  },
  language: 'EN',
  role: 'USER',
  bio: 'John is a software engineer from Bolzano, Italy',
  favProjectId: '1',
  serverValidationErrors: false,
}

const resolver = yupResolver(
  Yup.object().shape({
    username: Yup.string().required().min(3),
    email: Yup.string().email().required(),
    name: Yup.object().shape({
      first: Yup.string().required().min(3),
      last: Yup.string().required().min(3),
    }),
    language: Yup.string().required(),
    role: Yup.string().required(),
    bio: Yup.string(),
    favProjectId: Yup.string().nullable().required(),
    uiMode: Yup.mixed().oneOf(Object.values(UiMode)),
    serverValidationErrors: Yup.boolean().required(),
  })
)

export function FormExampleTemplate({
  onSubmit,
}: {
  onSubmit: (data: FormData) => void
}): ReactElement {
  const form = useForm<FormData>({
    resolver,
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

  const { triggerSubmit, apiErrorMessage } = useHandleSubmit(form, submitAction)

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
              />
              <FieldsetFormField
                label="Name"
                fields={['name.first', 'name.last']}
                indent={FieldSetIndent.label}
              >
                <div className="flex md:flex-row flex-col justify-between gap-3 [&>*]:flex-1">
                  <InputFormField
                    id="name.first"
                    type="text"
                    name="name.first"
                    placeholder="First name"
                  />
                  <InputFormField
                    id="name.last"
                    type="text"
                    name="name.last"
                    placeholder="Last name"
                  />
                </div>
              </FieldsetFormField>
              <InputFormField
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
              />
              <SelectFormField id="language" name="language" label="Language">
                <Option value="EN">English</Option>
                <Option value="DE">German</Option>
                <Option value="IT">Italian</Option>
              </SelectFormField>
              <SelectFormField id="role" name="role" label="Role">
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
              <SelectItemFormField<Project, Error>
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
              <FieldsetFormField
                label="Preferred UI mode"
                fields={['uiMode']}
                className="space-y-4"
              >
                {Object.values(UiMode).map((mode) => (
                  <RadioFormField
                    key={mode}
                    name="uiMode"
                    label={mode}
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
              <FormError>{apiErrorMessage}</FormError>
            </SectionContent>
            <SectionFooterWithSubmit />
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
