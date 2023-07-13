import { Source } from '@storybook/blocks'

export type SourceJsonProps = { obj: unknown }

export function SourceJson({ obj }: SourceJsonProps) {
  return <Source code={JSON.stringify(obj, null, 2)} language="json" />
}
