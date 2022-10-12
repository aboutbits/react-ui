import { IndexType } from '@aboutbits/pagination'
import { yupResolver } from '@hookform/resolvers/yup'
import React, { ReactElement, useCallback, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import * as Yup from 'yup'
import { SubmitButton } from '../button'
import { useHandleFormSubmission } from '../components/apiHooks/useHandleFormSubmission'
import { ContentArea } from '../components/content'
import {
  Layout,
  Section,
  SectionContainer,
  SectionContent,
  SectionFooterWithActions,
  SectionHeader,
} from '../components/section'
import {
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
} from '../form'
import {
  PaginatedResponse,
  SearchQueryParameters,
  SelectItem,
} from '../formAsync'
import { i18n, locales } from './i18n'

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
    email: Yup.string().email().required(),
    name: Yup.object().shape({
      first: Yup.string().required().min(3),
      last: Yup.string().required().min(3),
    }),
    language: Yup.string().required(),
    role: Yup.string().required(),
    bio: Yup.string(),
    favProjectId: Yup.string().nullable().required(),
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
  const intl = useIntl()

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
            <SectionContent layout={Layout.twoColumnGrid}>
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
                </div>
              </FieldSet>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder={intl.formatMessage({
                  id: 'shared.field.email',
                })}
                label={intl.formatMessage({ id: 'shared.field.email' })}
              />
              <Select
                id="language"
                name="language"
                label={intl.formatMessage({ id: 'shared.field.language' })}
              >
                {i18n.supportedLanguages.map((supportedLanguage, index) => (
                  <Option key={index} value={supportedLanguage}>
                    {locales[supportedLanguage]}
                  </Option>
                ))}
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
                label="Server validation"
                fields={['serverValidationErrors']}
                indent={FieldSetIndent.all}
              >
                <ToggleSwitch
                  name="serverValidationErrors"
                  label="Enable server validation errors"
                  layout={ToggleSwitchLayout.spaceBetween}
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
