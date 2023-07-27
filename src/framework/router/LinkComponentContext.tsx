import {
  AnchorHTMLAttributes,
  ComponentType,
  createContext,
  forwardRef,
  ForwardRefRenderFunction,
  useContext,
} from 'react'

export type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /**
   * Define the href for the Link.
   **/
  href: string

  /**
   * Defines whether it is an internal link or an external link.
   * For example NextJS/Link is an internal link and a classic HTML anchor tag is an external link.
   **/
  internal?: boolean
} & Record<string, unknown>

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>,
) => ({ __forwardRef__: forwardRef(render) }) as const

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>

export const DefaultLinkComponent = makeLinkComponent((props, ref) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a ref={ref} {...props} />
))

export const LinkComponentContext =
  createContext<LinkComponent>(DefaultLinkComponent)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function useLinkComponent() {
  const linkComponent = useContext(LinkComponentContext)

  if ('__forwardRef__' in linkComponent) {
    return linkComponent.__forwardRef__
  }

  return linkComponent
}
