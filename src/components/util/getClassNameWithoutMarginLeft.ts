export function getClassNameWithoutMarginLeft(className: string): string {
  return className.replace(/(^|\s)ml-\w+(?=\s|$)/, '')
}
