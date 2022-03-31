import { replacePlaceholderColorWithTextColor } from '../SelectItem'

describe('cssClassConverter', () => {
  it('should change nothing, no text-<color> or placeholder-<color>', () => {
    expect(
      replacePlaceholderColorWithTextColor('flex flex-row text-left')
    ).toBe('flex flex-row text-left')
  }),
    it('changes nothing, text-<color> but no placeholder-<color>', () => {
      expect(
        replacePlaceholderColorWithTextColor('flex flex-row text-green-500')
      ).toBe('flex flex-row text-green-500')
    }),
    it('changes it, no text-<color> but a placeholder-<color>', () => {
      expect(
        replacePlaceholderColorWithTextColor(
          'flex flex-row placeholder-green-500'
        )
      ).toBe('flex flex-row text-green-500')
    }),
    it('changes it, text-<color> and placeholder-<color>', () => {
      expect(
        replacePlaceholderColorWithTextColor(
          'flex flex-row text-green-500 placeholder-red'
        )
      ).toBe('flex flex-row text-red')
    }),
    it('changes it, text-<color> and placeholder-<color>. text-left is not changed', () => {
      expect(
        replacePlaceholderColorWithTextColor(
          'flex flex-row text-green-500 placeholder-red text-left'
        )
      ).toBe('flex flex-row text-red text-left')
    }),
    it('changes it, text-<color> and placeholder-<color>. text-opacity-5 is not changed', () => {
      expect(
        replacePlaceholderColorWithTextColor(
          'flex flex-row text-green-500 placeholder-red text-opacity-5'
        )
      ).toBe('flex flex-row text-red text-opacity-5')
    })
})
