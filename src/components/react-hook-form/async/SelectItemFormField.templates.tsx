import { ReactElement, useEffect, useState } from 'react'
import {
  PaginatedResponse,
  SearchQueryParameters,
} from './SelectItemDialogWithSearch'
import {
  SelectItemFormField,
  SelectItemFormFieldProps,
} from './SelectItemFormField'

type User = {
  id: number
  name: string
}

const useGetData = ({
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
    setTimeout(() => {
      setData(
        Array.from(Array(200).keys())
          .map((index): User => {
            return {
              id: index,
              name: `User ${index}`,
            }
          })
          .filter((user) => {
            if (search) {
              return user.name.includes(search)
            } else {
              return true
            }
          })
      )
    }, 1000)
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

export const TemplateNormal = ({
  ...args
}: SelectItemFormFieldProps<User, Error>): ReactElement => {
  return <SelectItemFormField {...args} useGetData={useGetData} />
}

export const TemplateError = ({
  ...args
}: SelectItemFormFieldProps<User, Error>): ReactElement => {
  const useGetData = (): {
    data?: PaginatedResponse<User>
    error?: Error
  } => {
    return {
      error: new Error('Something went wrong'),
    }
  }
  return <SelectItemFormField {...args} useGetData={useGetData} />
}

export const TemplateEmpty = ({
  ...args
}: SelectItemFormFieldProps<User, Error>): ReactElement => {
  const useGetData = ({
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
  return <SelectItemFormField {...args} useGetData={useGetData} />
}
