import classnames from 'classnames'
import IconWarning from '@aboutbits/react-material-icons/dist/IconWarning'
import { ComponentType } from 'react'
import { IconProps } from '@aboutbits/react-material-icons/dist/types'
import IconCheck from '@aboutbits/react-material-icons/dist/IconCheck'
import { ClassNameProps } from '../types'

export enum Tone {
  critical = 'critical',
  positive = 'positive',
}

export type Props = ClassNameProps & {
  tone: Tone
}

const Icon: Record<Tone, ComponentType<IconProps>> = {
  [Tone.critical]: IconWarning,
  [Tone.positive]: IconCheck,
}

export const FormMessage: React.FC<Props> = ({ className, tone, children }) => {
  if (!children) {
    return null
  }

  const MessageIcon = Icon[tone]

  return (
    <div
      className={classnames(
        `abui-form-message-${tone} xl:col-span-2 p-3`,
        className
      )}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`abui-form-message-icon-container-${tone} flex flex-shrink-0 justify-center items-center w-6 h-6 rounded-full`}
        >
          <MessageIcon
            className={`abui-form-message-icon-${tone} w-4 h-4 fill-current`}
          />
        </div>
        <div
          className={`abui-form-message-content-${tone} overflow-hidden text-xs break-words`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
