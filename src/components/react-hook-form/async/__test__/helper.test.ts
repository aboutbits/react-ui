import { replacePlaceholderColorWithTextColor } from '../replacePlaceholderColorWithTextColor'

describe('cssClassConverter', () => {
  test('should change nothing, no text-<color> or placeholder:text-<color>', () => {
    expect(
      replacePlaceholderColorWithTextColor('flex flex-row text-left'),
    ).toBe('flex flex-row text-left')
  })
  test('changes nothing, text-<color> but no placeholder:text-<color>', () => {
    expect(
      replacePlaceholderColorWithTextColor('flex flex-row text-green-500'),
    ).toBe('flex flex-row text-green-500')
  })
  test('changes it, no text-<color> but a placeholder:text-<color>', () => {
    expect(
      replacePlaceholderColorWithTextColor(
        'flex flex-row placeholder:text-green-500',
      ),
    ).toBe('flex flex-row text-green-500')
  })
  test('changes it, text-<color> and placeholder:text--<color>', () => {
    expect(
      replacePlaceholderColorWithTextColor(
        'flex flex-row text-green-500 placeholder:text-red',
      ),
    ).toBe('flex flex-row text-red')
  })
  test('changes it, text-<color> and placeholder:text-<color>. text-left is not changed', () => {
    expect(
      replacePlaceholderColorWithTextColor(
        'flex flex-row text-green-500 placeholder:text-red text-left',
      ),
    ).toBe('flex flex-row text-red text-left')
  })
  test('changes it, text-<color> and placeholder:text-<color>. text-opacity-5 is not changed', () => {
    expect(
      replacePlaceholderColorWithTextColor(
        'flex flex-row text-green-500 placeholder:text-red text-opacity-5',
      ),
    ).toBe('flex flex-row text-red text-opacity-5')
  })
})
