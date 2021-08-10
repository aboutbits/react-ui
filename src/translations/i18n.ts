import Internationalization from '@aboutbits/internationalization'

enum Language {
  IT = 'IT',
  DE = 'DE',
  EN = 'EN',
}

const locales: Record<Language, string> = {
  [Language.EN]: 'English',
  [Language.DE]: 'Deutsch',
  [Language.IT]: 'Italiano',
}

const supportedLanguages = [Language.EN, Language.IT, Language.DE]
const fallbackLanguage = Language.EN

const i18n = new Internationalization(
  supportedLanguages,
  fallbackLanguage,
  'Language'
)

export { i18n, locales }
