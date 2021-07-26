const HeaderLeftArea: React.FC<{
  className?: string
}> = ({ className, children }) => {
  return (
    <div className={className}>
      <div className="flex items-center mr-4">{children}</div>
    </div>
  )
}

export { HeaderLeftArea }
