import classNames from 'classnames'

const HeaderTitle: React.FC<{ className?: string }> = ({
  className,
  children,
}) => {
  return (
    <h1
      className={classNames(
        className,
        'flex-1 text-lg lg:text-3xl font-medium truncate'
      )}
    >
      {children}
    </h1>
  )
}

export { HeaderTitle }
