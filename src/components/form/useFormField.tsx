import {
  useFormContext,
  UseFormRegisterReturn,
  RefCallBack,
} from 'react-hook-form'

export function useFormField(name: string) {
  const formContext = useFormContext()

  let fieldRef: RefCallBack | null = null
  let fieldProps: null | Omit<UseFormRegisterReturn, 'ref'> = null

  if (formContext) {
    const { ref, ...rest } = formContext.register(name)
    fieldRef = ref
    fieldProps = rest
  }

  return {
    fieldRef,
    fieldProps,
  }
}
