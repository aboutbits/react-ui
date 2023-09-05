import { useCallback } from 'react'
import { useRouter } from '../../framework'

export const useBackNavigation = ({ fallbackUrl }: { fallbackUrl: string }) => {
  const router = useRouter()

  return {
    goBack: useCallback(() => {
      const canGoBack =
        typeof window !== 'undefined' &&
        'navigation' in window &&
        typeof window.navigation === 'object' &&
        window.navigation !== null &&
        'canGoBack' in window.navigation &&
        typeof window.navigation.canGoBack === 'boolean'
          ? window.navigation.canGoBack
          : window.history.length > 1

      if (canGoBack) {
        router.back()
      } else {
        router.replace(fallbackUrl)
      }
    }, [fallbackUrl, router]),
  }
}
