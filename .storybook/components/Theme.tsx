import { Markdown, Subheading } from '@storybook/addon-docs'
import { ReactElement } from 'react'
import {
  defaultTheme,
  Theme as ThemeType,
} from '../../src/framework/theme/theme'
import { SourceJson } from './SourceJson'

export function Theme<T extends keyof ThemeType, R extends keyof ThemeType[T]>({
  component,
  items,
}: {
  component: T
  items?: Array<R>
}): ReactElement {
  const theme = {
    [component]: items
      ? Object.fromEntries(
          items.map((item) => [item, defaultTheme[component][item]])
        )
      : defaultTheme[component],
  }

  return (
    <>
      <Subheading>Theme</Subheading>
      <Markdown>This component uses the following theme defaults:</Markdown>
      <SourceJson obj={theme} />
    </>
  )
}
