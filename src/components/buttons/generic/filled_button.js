const FilledButton = ({children, handleClick, disabled, additionalStyling}) => {
  return (
    <button className={`
      bg-secondaryColor hover:bg-secondaryDarkColor disabled:bg-disabled
      text-white fill-white text-[18px] font-semibold
      rounded p-[6px] align-text-top ${additionalStyling}`}
      onClick={handleClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
export default FilledButton
