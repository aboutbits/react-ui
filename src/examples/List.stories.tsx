import { IndexType } from '@aboutbits/pagination'
import IconAddOutlinedFilled from '@aboutbits/react-material-icons/dist/IconAddOutlinedFilled'
import { useMatchMediaQuery } from '@aboutbits/react-toolbox'
import { action } from '@storybook/addon-actions'
import { Markdown } from '@storybook/addon-docs'
import { Stories, Title } from '@storybook/blocks'
import { Meta, StoryFn } from '@storybook/react'
import { useMemo, useState } from 'react'
import {
  ButtonIcon,
  ButtonVariant,
  FormVariant,
  Option,
  SearchField,
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
  SectionListItemButtonProps,
  SectionListItemLink,
  SelectField,
  Tone,
  useFilter,
} from '../components'

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
        name: `User ${(item + 1).toString()}`,
        role: index % 8 === 0 ? 'ADMIN' : 'USER',
        department: index % 3 === 0 ? 'HR' : 'SALES',
      })),
    [numberOfTotalItems],
  )
}

const List = ({
  numberOfTotalItems = 5,
  withIcon,
}: { numberOfTotalItems?: number } & Pick<
  SectionListItemButtonProps,
  'withIcon'
>) => {
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
            {content.map((item, index) =>
              index % 2 === 0 ? (
                <SectionListItemButton
                  key={item.name}
                  onClick={action('onItemClick')}
                  withIcon={withIcon}
                >
                  {`Button ${item.name} (${item.role} - ${item.department})`}
                </SectionListItemButton>
              ) : (
                <SectionListItemLink
                  key={item.name}
                  href="#"
                  withIcon={withIcon}
                >
                  {`Link ${item.name} (${item.role} - ${item.department})`}
                </SectionListItemLink>
              ),
            )}
          </SectionContentList>
        )}
      </SectionContainer>
    </Section>
  )
}

export const SimpleList: Story = () => <List />

export const EmptySimpleList: Story = () => <List numberOfTotalItems={0} />

export const ListWithoutIcon: Story = () => <List withIcon={false} />

/**
 * The following example shows how multiple section components and the in memory pagination are used to create an overview list with filters.
 */
export const ListWithFilter: Story = () => {
  const isScreenMedium = useMatchMediaQuery('(min-width: 768px)')
  const filterVariant = isScreenMedium
    ? FormVariant.Soft
    : FormVariant.Transparent
  const numberOfTotalItems = 1000
  const numberOfItemsPerPage = 5
  const [page, setPage] = useState(1)
  const [filter, setFilter] = useState({
    role: 'ADMIN',
    department: '',
    search: '',
  })
  const content = useMockedList(numberOfTotalItems).filter(
    (item) =>
      item.name.includes(filter.search) &&
      (filter.role === '' || item.role === filter.role) &&
      (filter.department === '' || item.department === filter.department),
  )
  const searchFilterProps = useFilter<HTMLInputElement>()(
    filter.search,
    (v) => {
      setFilter((prevFilter) => ({ ...prevFilter, search: v }))
    },
    {
      debounce: true,
    },
  )
  const roleFilterProps = useFilter<HTMLSelectElement>()(filter.role, (v) => {
    setFilter((prevFilter) => ({ ...prevFilter, role: v }))
  })
  const departmentFilterProps = useFilter<HTMLSelectElement>()(
    filter.department,
    (v) => {
      setFilter((prevFilter) => ({ ...prevFilter, department: v }))
    },
  )
  return (
    <Section>
      <SectionHeaderArea>
        <SectionHeaderRow>
          <SectionHeaderTitle>List of users</SectionHeaderTitle>
          <ButtonIcon
            label="Add"
            icon={IconAddOutlinedFilled}
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
            <SearchField
              {...searchFilterProps}
              className="w-full grow md:w-auto"
            />
            <SectionHeaderGroup className="grid w-full grid-cols-2 md:flex md:w-auto">
              <SelectField
                {...roleFilterProps}
                name="role"
                variant={filterVariant}
              >
                <Option value="">All roles</Option>
                <Option value="ADMIN">Admin</Option>
                <Option value="USER">User</Option>
              </SelectField>
              <SelectField
                {...departmentFilterProps}
                name="department"
                variant={filterVariant}
              >
                <Option value="">All departments</Option>
                <Option value="HR">Human Resources</Option>
                <Option value="IT">Engineering</Option>
                <Option value="SALES">Sales</Option>
              </SelectField>
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
