const SubtleButton = ({children, handleClick, additionalStyling, customPadding, customMargin}) => {
  return (
    <button className={`
      bg-subtleColor hover:bg-subtleColor/40
      text-primaryColor text-[18px]
      rounded align-middle ${additionalStyling}
      ${customPadding || "p-1.5"} ${customMargin}`}
      onClick={handleClick}
      type="button"
    >
      <div className="inline-flex align-middle font-semibold">
        {children}
      </div>
    </button>
  )
}
export default SubtleButton
