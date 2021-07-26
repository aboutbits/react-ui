const HeaderRightArea: React.FC<{
  className?: string
}> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="flex items-center ml-4">{children}</div>
    </div>
  )
}

export { HeaderRightArea }
