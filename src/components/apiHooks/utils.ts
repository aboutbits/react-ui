export function joinFieldErrorMessages(
  errors: Record<string, string[] | null>
): Record<string, string> {
  if (!errors && typeof errors !== 'object') {
    return {}
  }

  return Object.keys(errors).reduce<Record<string, string>>((acc, key) => {
    const fieldErrors = errors[key]

    if (Array.isArray(fieldErrors)) {
      acc[key] = fieldErrors.join(', ')
    }

    return acc
  }, {})
}
