const GenericButton = ({children, handleClick}) => {
  return (
    <button className="
      bg-subtleColor hover:bg-subtleColor/40
      text-primaryColor text-[18px]
      rounded p-[6px] align-middle ml-5"
      onClick={handleClick}
    >
      <div className="inline-flex align-middle font-semibold">
        {children}
      </div>
    </button>
  )
}
export default GenericButton
