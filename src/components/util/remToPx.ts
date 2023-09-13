export function remToPx(rem: number) {
  const documentRootFontSize =
    typeof document !== 'undefined'
      ? parseInt(getComputedStyle(document.documentElement).fontSize)
      : NaN

  const rootFontSize = isNaN(documentRootFontSize) ? 16 : documentRootFontSize

  return rem * rootFontSize
}
