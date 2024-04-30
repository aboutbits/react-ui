import { IndexType } from '@aboutbits/pagination'
import { zodResolver } from '@hookform/resolvers/zod'
import { action } from '@storybook/addon-actions'
import {
  Controls,
  Primary,
  Stories,
  Subheading,
  Title,
} from '@storybook/addon-docs'
import { Description } from '@storybook/blocks'
import { Meta, StoryObj } from '@storybook/react'
import { useState, useEffect, ComponentProps } from 'react'
import { DefaultValues, useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  InternationalizationMessages,
  Theme,
} from '../../../../.storybook/components'
import { ErrorBody } from '../../util'
import { Form } from '../Form'
import {
  SearchQueryParameters,
  PaginatedResponse,
  SelectItemFormFieldV2,
} from '.'

const userSchema = z.object({
  id: z.number(),
  name: z.string(),
})

type User = z.infer<typeof userSchema>

type StoryProps = ComponentProps<
  typeof SelectItemFormFieldV2<User, ErrorBody>
> & {
  initialItem?: User
}

const meta = {
  title: 'components/react-hook-form/SelectItemFormFieldV2',
  component: SelectItemFormFieldV2,
  args: {
    name: 'user',
    label: 'Select user',
    placeholder: 'User',
    dialogTitle: 'Users',
    dialogLabel: 'Users',
    noSearchResults: 'No users available.',
    renderListItem: (item) => item.name,
    renderErrorMessage: (error) => error.message,
    paginationConfig: { indexType: IndexType.ZERO_BASED },
    dialogProps: { overlayClassName: 'z-10' },
  },
  argTypes: {
    disabled: { type: 'boolean' },
  },
  decorators: [
    (Story, context) => {
      const personSchema = z.object({
        user: userSchema,
      })
      type Person = z.infer<typeof personSchema>
      const defaultPerson: DefaultValues<Person> = {
        user: context.args.initialItem,
      }
      const form = useForm({
        resolver: zodResolver(personSchema),
        defaultValues: defaultPerson,
      })
      return (
        <Form form={form} onSubmit={action('onSubmit')}>
          <Story />
        </Form>
      )
    },
  ],
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description />
          <Primary />
          <Subheading>Props</Subheading>
          <Controls />
          <Theme component="form" items={['selectItem']} />
          <InternationalizationMessages
            items={[
              'select.clear',
              'select.search.empty',
              'search.placeholder',
            ]}
          />
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<StoryProps>

export default meta
type Story = StoryObj<StoryProps>

const useGetDataSuccess = ({
  search,
  page,
  size,
}: SearchQueryParameters): {
  data?: PaginatedResponse<User>
  error?: Error
} => {
  const [data, setData] = useState<User[] | undefined>()

  useEffect(() => {
    setData(undefined)
    const id = setTimeout(() => {
      setData(
        Array.from(Array(200).keys())
          .map((index): User => {
            return {
              id: index,
              name: `User ${index.toString()}`,
            }
          })
          .filter((user) => {
            if (search !== undefined) {
              return user.name.includes(search)
            } else {
              return true
            }
          }),
      )
    }, 1000)
    return () => {
      clearTimeout(id)
    }
  }, [search, page, size])

  if (data === undefined) {
    return {}
  } else {
    return {
      data: {
        items: data.slice(page * size, page * size + size),
        currentPage: page,
        perPage: size,
        total: data.length,
      },
    }
  }
}

const useGetDataError = (): {
  data?: PaginatedResponse<User>
  error?: Error
} => {
  return {
    error: new Error('Something went wrong'),
  }
}

const useGetDataEmpty = ({
  size,
}: SearchQueryParameters): {
  data?: PaginatedResponse<User>
  error?: Error
} => {
  return {
    data: {
      items: [],
      currentPage: 0,
      perPage: size,
      total: 0,
    },
  }
}

export const Default: Story = {
  args: { useGetData: useGetDataSuccess },
}

export const WithInitialItem: Story = {
  args: {
    useGetData: useGetDataSuccess,
    initialItem: { id: 3, name: 'User 3' },
  },
}

export const WithError: Story = {
  args: { useGetData: useGetDataError },
}

export const WithEmptyList: Story = {
  args: { useGetData: useGetDataEmpty },
}
