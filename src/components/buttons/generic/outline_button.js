const OutlineButton = ({children, handleClick, disabled, additionalStyling, customPadding, customMargin}) => {
  return (
    <button className={`
      bg-white
      text-secondaryColor hover:text-secondaryDarkColor
      fill-secondaryColor hover:fill-secondaryDarkColor
      text-[18px] rounded font-semibold align-text-top
      border-2 hover:border-secondaryDarkColor border-secondaryColor
      ${additionalStyling} ${customPadding || "p-[4px]"} ${customMargin}
      `}
      onClick={handleClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
export default OutlineButton
