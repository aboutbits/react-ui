import classNames from 'classnames'
import { FormattedMessage } from 'react-intl'

import { Warning } from '../../svg/Warning'
import { Button, Variant } from '../../button/Button'

const SectionError: React.FC = ({ children }) => (
  <div
    className={classNames(
      'flex flex-col items-center justify-center overflow-hidden mx-auto my-15 lg:mt-20'
    )}
  >
    <div className="w-60 h-60">
      <Warning />
    </div>
    <div className="mt-7 text-4xl font-bold">
      <FormattedMessage id="shared.error.title" />
    </div>
    <div className="mt-5 w-full text-xl text-center break-words">
      {children}
    </div>
    <Button
      variant={Variant.solid}
      onClick={() => window.location.reload()}
      className="mt-10 lg:mt-20"
    >
      <FormattedMessage id="shared.button.reload" />
    </Button>
  </div>
)
export { SectionError }
