import { ReactElement, ReactNode } from 'react'
import { useInternationalization, useTheme } from '../../../framework'
import { Actions } from '../../action'
import { SubmitButton } from '../../button'
import {
  FormSubmitFeedback,
  FormSubmitFeedbackProps,
} from '../../form/FormSubmitFeedback'
import { SectionFooterArea } from './SectionFooterArea'

export type SectionFooterWithSubmitProps = {
  submitButtonText?: ReactNode
  enableSubmitFeedback?: boolean
  submitFeedbackProps?: FormSubmitFeedbackProps
}

export function SectionFooterWithSubmit({
  submitButtonText,
  enableSubmitFeedback = true,
  submitFeedbackProps,
}: SectionFooterWithSubmitProps): ReactElement {
  const { section } = useTheme()
  const { messages } = useInternationalization()

  return (
    <SectionFooterArea className={section.footerWithSubmit.base}>
      <Actions className={section.footerWithSubmit.actions}>
        <SubmitButton>
          {submitButtonText ?? messages['form.submit']}
        </SubmitButton>
      </Actions>
      {enableSubmitFeedback && (
        <FormSubmitFeedback
          className={section.footerWithSubmit.formSubmitFeedback}
          {...submitFeedbackProps}
        />
      )}
    </SectionFooterArea>
  )
}
