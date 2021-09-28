import { helper } from '../SelectItem'

describe('cssClassConverter', () => {
  it('should change nothing, no text-<color> or placeholder-<color>', () => {
    expect(helper('flex flex-row text-left')).toBe('flex flex-row text-left')
  }),
    it('changes nothing, text-<color> but no placeholder-<color>', () => {
      expect(helper('flex flex-row text-green')).toBe(
        'flex flex-row text-green'
      )
    }),
    it('changes it, no text-<color> but a placeholder-<color>', () => {
      expect(helper('flex flex-row placeholder-green')).toBe(
        'flex flex-row text-green'
      )
    }),
    it('changes it, text-<color> and placeholder-<color>', () => {
      expect(helper('flex flex-row text-green placeholder-red')).toBe(
        'flex flex-row text-red'
      )
    }),
    it('changes it, text-<color> and placeholder-<color>. text-left is not changed', () => {
      expect(helper('flex flex-row text-green placeholder-red text-left')).toBe(
        'flex flex-row text-red text-left'
      )
    }),
    it('changes it, text-<color> and placeholder-<color>. text-opacity-5 is not changed', () => {
      expect(
        helper('flex flex-row text-green placeholder-red text-opacity-5')
      ).toBe('flex flex-row text-red text-opacity-5')
    })
})
