function SidebarButton({ children, variant, icon }) {
  const getVariantClasses = () => {
    if (variant === 'unselected') {
      return 'text-[#35383E]'
    }

    if (variant === 'selected') {
      return 'bg-brand-primary bg-opacity-15 text-brand-primary'
    }
  }

  return (
    <a
      className={`flex items-center gap-2 rounded-lg px-6 py-3 ${getVariantClasses()}`}
    >
      {icon}
      {children}
    </a>
  )
}

export default SidebarButton
