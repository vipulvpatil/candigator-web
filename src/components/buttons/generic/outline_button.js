const OutlineButton = ({children, handleClick, disabled, additionalStyling}) => {
  return (
    <button className={`
      bg-white
      text-secondaryColor hover:text-secondaryDarkColor
      fill-secondaryColor hover:fill-secondaryDarkColor
      text-[18px] rounded font-semibold
      border-2 hover:border-secondaryDarkColor border-secondaryColor
      p-[4px] align-text-top
      ${additionalStyling}`}
      onClick={handleClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
export default OutlineButton
