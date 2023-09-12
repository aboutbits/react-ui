const className = {
  menuContainer: 'relative',
  menuButton: {
    base: 'flex items-center underline focus:no-underline focus:outline-none focus:ring',
    disabled: 'text-neutral-800/[0.36]',
  },
  menuItem: {
    base: 'block py-1.5 px-4 cursor-pointer hover:bg-primary-100 w-full text-left',
    active: 'bg-primary-100',
  },
  menuList: {
    base: 'py-2 w-32 rounded shadow focus:outline-none bg-white absolute',
  },
}

export default className
