import { Source } from '@storybook/addon-docs'
import { Description } from '@storybook/components'
import React, { ReactElement } from 'react'
import defaultMessages from '../../src/framework/internationalization/defaultMessages.en'

export function InternationalizationMessages({
  items,
}: {
  items: string[]
}): ReactElement {
  const messages = Object.fromEntries(
    // eslint-disable-next-line
    // @ts-ignore
    items.map((item) => [item, defaultMessages?.[item]])
  )

  return (
    <>
      <Description
        markdown={`This component uses the following message keys and default values:`}
      />
      <Source code={JSON.stringify(messages, null, 2)} language="json" />
    </>
  )
}
