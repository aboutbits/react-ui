import { IndexType } from '@aboutbits/pagination'
import { yupResolver } from '@hookform/resolvers/yup'
import { action } from '@storybook/addon-actions'
import { ReactElement, useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
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
  Input2,
  Input3,
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
    serverValidationErrors: Yup.boolean().required(),
  })
)

export function FormExampleTemplate(): ReactElement {
  const form = useForm<FormData>({
    resolver,
    defaultValues,
  })

  const inputRef = useRef<HTMLInputElement>(null)

  const testFunc = () => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <ContentArea>
      <Form form={form} onSubmit={action('onSubmit')} className="space-y-3">
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
              <Input3
                id="username"
                type="text"
                name="username"
                label="Username"
                placeholder="Username"
                ref={inputRef}
              />
              <button onClick={testFunc} type="button">
                TEST
              </button>
              <FieldSet
                label="Name"
                fields={['name.first', 'name.last']}
                indent={FieldSetIndent.label}
              >
                <div className="flex md:flex-row flex-col justify-between gap-3 [&>*]:flex-1">
                  <Input2
                    id="name.first"
                    type="text"
                    name="name.first"
                    label="First name"
                    placeholder="First name"
                  />
                  <Input2
                    id="name.last"
                    type="text"
                    name="name.last"
                    label="Last name"
                    placeholder="Last name"
                  />
                </div>
              </FieldSet>
              <Input2
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
