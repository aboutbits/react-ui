/**
 * Converts TailwindCSS classes from placeholder to text.
 *
 * Some Tailwind classes (e.g. text-left) are excluded from the transformation as they are not linked to the text color.
 **/
export const replacePlaceholderColorWithTextColor = (css: string): string => {
  if (!css.includes('placeholder')) {
    return css
  }
  return (
    css
      .split(' ')
      // Removes TailwindCSS text-<color>
      .filter((item) =>
        item.includes('text')
          ? !!item.match(
              /:|(text-(left|center|right|justify)|text-opacity-.*)/g
            )
          : true
      )
      // Transforms TailwindCSS placeholder:text-* to text-*
      .map((item) =>
        item.includes('placeholder:text-')
          ? item.replace('placeholder:text-', 'text-')
          : item
      )
      .join(' ')
  )
}
