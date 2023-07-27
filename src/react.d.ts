import React from 'react'

// Augment module to make forwardRef support generics
declare module 'react' {
  function forwardRef<T, P = object>(
    render: (props: P, ref: React.ForwardedRef<T>) => React.ReactElement | null,
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null
}
