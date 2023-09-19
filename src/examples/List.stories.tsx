import { Title, Stories } from '@storybook/blocks'
import { action } from '@storybook/addon-actions'
import { Meta, StoryFn } from '@storybook/react'
import { useMemo, useState } from 'react'
import { IndexType } from '@aboutbits/pagination'
import IconAdd from '@aboutbits/react-material-icons/dist/IconAdd'
import { Markdown } from '@storybook/addon-docs'
import {
  ButtonIcon,
  ButtonVariant,
  Section,
  SectionContainer,
  SectionContentEmpty,
  SectionContentList,
  SectionFooterWithPaginationInMemory,
  SectionHeader,
  SectionHeaderArea,
  SectionHeaderGroup,
  SectionHeaderGroupSpacing,
  SectionHeaderRow,
  SectionHeaderRowLayout,
  SectionHeaderSpacer,
  SectionHeaderTitle,
  SectionListItemButton,
  Tone,
  Option,
} from '../components'
import { SearchFilterField } from '../components/filter/SearchFilterField'
import { SelectFilterField } from '../components/filter/SelectFilterField'

const meta = {
  component: SectionContentList,
  argTypes: {
    className: { table: { disable: true } },
  },
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Markdown>
            Examples on how to build simple and complex lists.
          </Markdown>
          <Stories />
        </>
      ),
    },
  },
} satisfies Meta<typeof SectionContentList>

export default meta
type Story = StoryFn<typeof meta>

function useMockedList(numberOfTotalItems: number) {
  return useMemo(
    () =>
      Array.from(Array(numberOfTotalItems).keys()).map((item, index) => ({
        name: `User ${item + 1}`,
        role: index % 8 === 0 ? 'ADMIN' : 'USER',
        department: index % 3 === 0 ? 'HR' : 'SALES',
      })),
    [numberOfTotalItems],
  )
}

const List = ({ numberOfTotalItems = 5 }: { numberOfTotalItems?: number }) => {
  const content = useMockedList(numberOfTotalItems)
  return (
    <Section>
      <SectionHeader title="List of users" />
      <SectionContainer>
        {content.length === 0 ? (
          <SectionContentEmpty
            title="No users found"
            text="There are no items in this list at the moment."
          />
        ) : (
          <SectionContentList>
            {content.map((item) => (
              <SectionListItemButton
                key={item.name}
                onClick={action('onItemClick')}
              >
                {`${item.name} (${item.role} - ${item.department})`}
              </SectionListItemButton>
            ))}
          </SectionContentList>
        )}
      </SectionContainer>
    </Section>
  )
}

export const SimpleList: Story = () => <List />

export const EmptySimpleList: Story = () => <List numberOfTotalItems={0} />

/**
 * The following example shows how multiple section components and the in memory pagination are used to create an overview list with filters.
 */
export const ListWithFilter: Story = () => {
  const numberOfTotalItems = 1000
  const numberOfItemsPerPage = 5
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState({ role: '', department: '', search: '' })
  const content = useMockedList(numberOfTotalItems).filter(
    (item) =>
      item.name.includes(filter.search) &&
      (filter.role === '' || item.role === filter.role) &&
      (filter.department === '' || item.department === filter.department),
  )
  return (
    <Section>
      <SectionHeaderArea>
        <SectionHeaderRow>
          <SectionHeaderTitle>List of users</SectionHeaderTitle>
          <ButtonIcon
            label="Add"
            icon={IconAdd}
            variant={ButtonVariant.Transparent}
            tone={Tone.Neutral}
            onClick={action('onAddNew')}
          />
        </SectionHeaderRow>
        <SectionHeaderRow layout={SectionHeaderRowLayout.Stretch}>
          <SectionHeaderGroup
            spacing={SectionHeaderGroupSpacing.Md}
            className="flex-col gap-y-2 md:flex-row"
          >
            <SearchFilterField
              filter={{
                value: filter.search,
                setValue: (v) => {
                  setFilter((prevFilter) => ({ ...prevFilter, search: v }))
                },
              }}
            />
            <SectionHeaderGroup className="grid w-full grid-cols-2 md:flex md:w-auto">
              <SelectFilterField
                name="role"
                filter={{
                  value: filter.role,
                  setValue: (v) => {
                    setFilter((prevFilter) => ({ ...prevFilter, role: v }))
                  },
                }}
              >
                <Option value="">All roles</Option>
                <Option value="ADMIN">Admin</Option>
                <Option value="USER">User</Option>
              </SelectFilterField>
              <SelectFilterField
                name="department"
                filter={{
                  value: filter.department,
                  setValue: (v) => {
                    setFilter((prevFilter) => ({
                      ...prevFilter,
                      department: v,
                    }))
                  },
                }}
              >
                <Option value="">All departments</Option>
                <Option value="HR">Human Resources</Option>
                <Option value="IT">Engineering</Option>
                <Option value="SALES">Sales</Option>
              </SelectFilterField>
            </SectionHeaderGroup>
          </SectionHeaderGroup>
        </SectionHeaderRow>
        <SectionHeaderSpacer />
      </SectionHeaderArea>
      <SectionContainer>
        {content.length === 0 ? (
          <SectionContentEmpty
            title="No users found"
            text="There are no items in this list at the moment."
          />
        ) : (
          <SectionContentList>
            {content
              .slice(
                (page - 1) * numberOfItemsPerPage,
                (page - 1) * numberOfItemsPerPage + numberOfItemsPerPage,
              )
              .map((item) => (
                <SectionListItemButton
                  key={item.name}
                  onClick={action('onItemClick')}
                >
                  {`${item.name} (${item.role} - ${item.department})`}
                </SectionListItemButton>
              ))}
          </SectionContentList>
        )}
        <SectionFooterWithPaginationInMemory
          page={page}
          size={numberOfItemsPerPage}
          total={content.length}
          onChangePage={setPage}
          config={{ indexType: IndexType.ONE_BASED }}
        />
      </SectionContainer>
    </Section>
  )
}
