import { createI18n } from 'vue-i18n'
import fr from './locales/fr.json'
import en from './locales/en.json'

const STORAGE_KEY = 'lang'
const SUPPORTED_LOCALES = ['fr', 'en'] as const
type Locale = (typeof SUPPORTED_LOCALES)[number]

function isSupportedLocale(value: string | null): value is Locale {
  return SUPPORTED_LOCALES.includes(value as Locale)
}

function detectLocale(): Locale {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (isSupportedLocale(saved)) return saved

  const browserLang = navigator.language.slice(0, 2)
  if (isSupportedLocale(browserLang)) return browserLang

  return 'fr'
}

const i18n = createI18n({
  legacy: false,
  locale: detectLocale(),
  fallbackLocale: 'fr',
  messages: { fr, en },
})

export function setLocale(locale: Locale) {
  i18n.global.locale.value = locale
  localStorage.setItem(STORAGE_KEY, locale)
  document.documentElement.setAttribute('lang', locale)
}

document.documentElement.setAttribute('lang', i18n.global.locale.value)

export default i18n
