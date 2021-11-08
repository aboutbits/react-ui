import { ReactElement, useEffect, useState } from 'react'
import { NavigationProvider } from '../../navigation'
import { SelectItem, SelectItemProps } from './SelectItem'
import {
  PaginatedResponse,
  SearchQueryParameters,
} from './SelectItemDialogWithSearch'

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
}: SelectItemProps<User, Error>): ReactElement => {
  return (
    <NavigationProvider>
      <SelectItem {...args} useGetData={useGetData} />
    </NavigationProvider>
  )
}

export const TemplateError = ({
  ...args
}: SelectItemProps<User, Error>): ReactElement => {
  const useGetData = ({}: SearchQueryParameters): {
    data?: PaginatedResponse<User>
    error?: Error
  } => {
    return {
      error: new Error('Something went wrong'),
    }
  }
  return (
    <NavigationProvider>
      <SelectItem {...args} useGetData={useGetData} />
    </NavigationProvider>
  )
}

export const TemplateEmpty = ({
  ...args
}: SelectItemProps<User, Error>): ReactElement => {
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
  return (
    <NavigationProvider>
      <SelectItem {...args} useGetData={useGetData} />
    </NavigationProvider>
  )
}
