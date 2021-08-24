import { joinFieldErrorMessages } from '../utils'

describe('joinFieldErrorMessages', () => {
  it('should return an empty object if no field errors are available', () => {
    const errors = {}

    const result = joinFieldErrorMessages(errors)

    expect(result).toEqual({})
  }),
    it('should skip if error value of field is null', () => {
      const errors = {
        email: null,
      }

      const result = joinFieldErrorMessages(errors)

      expect(result).not.toHaveProperty('email')
    }),
    it('should concatenate errors per field with comma', () => {
      const errors = {
        email: ['Min length 3', 'Not an email'],
      }

      const result = joinFieldErrorMessages<{ email: string }>(errors)

      expect(result.email).toEqual('Min length 3, Not an email')
    }),
    it('should create a nested structure', () => {
      const errors = {
        'address.longitude': ['Wrong longitude'],
        'address.latitude': ['Wrong latitude'],
      }

      const result = joinFieldErrorMessages<{
        address: {
          longitude: string
          latitude: string
        }
      }>(errors)

      expect(result.address?.longitude).toEqual('Wrong longitude')
    })
})
