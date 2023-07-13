import { Markdown, Subheading } from '@storybook/addon-docs'
import { ReactElement } from 'react'
import defaultMessages from '../../src/framework/internationalization/defaultMessages.en'
import { SourceJson } from './SourceJson'

export function InternationalizationMessages({
  items,
}: {
  items: (keyof typeof defaultMessages)[]
}): ReactElement {
  const messages = Object.fromEntries(
    items.map((item) => [item, defaultMessages[item]])
  )

  return (
    <>
      <Subheading>Internationalization messages</Subheading>
      <Markdown>
        This component uses the following message keys and default values:
      </Markdown>
      <SourceJson obj={messages} />
    </>
  )
}
