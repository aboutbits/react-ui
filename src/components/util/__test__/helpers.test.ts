import { joinFieldErrorMessages } from '../helpers'

describe('joinFieldErrorMessages', () => {
  test('should return an empty object if no field errors are available', () => {
    const errors = {}

    const result = joinFieldErrorMessages(errors)

    expect(result).toEqual({})
  })
  test('should skip if error value of field is null', () => {
    const errors = {
      email: null,
    }

    const result = joinFieldErrorMessages(errors)

    expect(result).not.toHaveProperty('email')
  })
  test('should concatenate errors per field with comma', () => {
    const errors = {
      email: ['Min length 3', 'Not an email'],
    }

    const result = joinFieldErrorMessages(errors)

    expect(result.email).toEqual('Min length 3, Not an email')
  })
  test('should work with multiple errors and nested field structure', () => {
    const errors = {
      'address.longitude': ['Wrong longitude'],
      'address.latitude': ['Wrong latitude'],
    }

    const result = joinFieldErrorMessages(errors)

    expect(result['address.longitude']).toEqual('Wrong longitude')
    expect(result['address.latitude']).toEqual('Wrong latitude')
  })
})
