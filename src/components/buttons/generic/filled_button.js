const FilledButton = ({children, handleClick, disabled, additionalStyling, customPadding, customMargin}) => {
  return (
    <button className={`
      bg-secondaryColor hover:bg-secondaryDarkColor disabled:bg-disabled
      text-white fill-white text-[18px] font-semibold
      rounded align-text-top
      ${additionalStyling} ${customPadding || "p-1.5"} ${customMargin}
      `}
      onClick={handleClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
export default FilledButton
