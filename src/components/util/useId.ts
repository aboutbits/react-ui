/**
 * useId
 *
 * Autogenerate IDs to facilitate WAI-ARIA and server rendering.
 *
 * Note: The returned ID will initially be `null` and will update after a
 * component mounts. Users may need to supply their own ID if they need
 * consistent values for SSR.
 *
 * @see Docs https://reach.tech/auto-id
 */

/* eslint-disable react-hooks/rules-of-hooks */

import React, { useEffect, useLayoutEffect, useState } from 'react'

let serverHandoffComplete = false
let id = 0

const useIsomorphicLayoutEffect = canUseDOM() ? useLayoutEffect : useEffect

function canUseDOM() {
  return !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
  )
}

function genId() {
  return ++id
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const maybeReactUseId: undefined | (() => string) = (React as any)[
  'useId'.toString()
]

function useId(idFromProps: string): string
function useId(idFromProps: number): number
function useId(idFromProps: string | number): string | number
function useId(idFromProps: string | undefined | null): string | undefined
function useId(idFromProps: number | undefined | null): number | undefined
function useId(
  idFromProps: string | number | undefined | null
): string | number | undefined
function useId(): string | undefined

function useId(providedId?: number | string | undefined | null) {
  if (maybeReactUseId !== undefined) {
    const generatedId = maybeReactUseId()
    return providedId ?? generatedId
  }

  // If this instance isn't part of the initial render, we don't have to do the
  // double render/patch-up dance. We can just generate the ID and return it.
  const initialId = providedId ?? (serverHandoffComplete ? genId() : null)
  const [id, setId] = useState(initialId)

  useIsomorphicLayoutEffect(() => {
    if (id === null) {
      // Patch the ID after render. We do this in `useLayoutEffect` to avoid any
      // rendering flicker, though it'll make the first render slower (unlikely
      // to matter, but you're welcome to measure your app and let us know if
      // it's a problem).
      setId(genId())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (serverHandoffComplete === false) {
      // Flag all future uses of `useId` to skip the update dance. This is in
      // `useEffect` because it goes after `useLayoutEffect`, ensuring we don't
      // accidentally bail out of the patch-up dance prematurely.
      serverHandoffComplete = true
    }
  }, [])

  return providedId ?? id ?? undefined
}

export { useId }
