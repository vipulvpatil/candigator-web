const IconButton = ({children, handleClick, disabled, additionalStyling}) => {
  return (
    <button className={`
      w-[34px] fill-secondaryColor hover:fill-secondaryDarkColor
      ${additionalStyling}`}
      onClick={handleClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  )
}
export default IconButton
