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
   * */
  href: string
}

export const makeLinkComponent = (
  render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>
) => ({ __forwardRef__: forwardRef(render) } as const)

export type LinkComponent =
  | ReturnType<typeof makeLinkComponent>
  | ComponentType<LinkComponentProps>

export const DefaultLinkComponent = makeLinkComponent((props, ref) => (
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
