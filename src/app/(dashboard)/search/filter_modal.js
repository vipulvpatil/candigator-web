import GenericButton from "@/components/generic_button"

const FilterModal = ({show, handleClose}) => {
  const closeModal = () => {
    handleClose()
  }

  if (!show) {
    return <></>
  }

  return (
    <>
      <div
      className="
        absolute top-[65px] left-[220px]
        bottom-0 right-0
        background-blur-sm bg-black/30
      "
      onClick={closeModal}
      />
      <div
        className="
          absolute top-[65px] left-[220px]
          right-0
          mt-[100px] mb-auto
          ml-auto mr-auto w-[50%]
          p-[22px] rounded-lg
          min-h-[200px] max-h-[500px] min-w-[700px]
        bg-white
          drop-shadow-modal
          text-left
          flex flex-col flex-shrink-0
        "
      >
        <div className="text-[24px] mt-[-10px] font-semibold float-left">
          {"Set filters"}
        </div>
        <div className="clear-both"/>
        <form
          // onSubmit={handleSubmit(onSubmit)}
          className="w-full"
        >
          <FilterInputElement handleRemove={() => {console.log("remove this")}}/>
        </form>
        <div className="float-left pt-2">
          <GenericButton handleClick={() => {}} additionalStyling={"px-3"}>
            {"Add Filter"}
          </GenericButton>
        </div>
        <div className="flex-grow clear-both"/>
        <div className="float-right flex flex-row">
          <div className="flex-grow"/>
          <OutlineButton label={"Reset"}/>
          <div className="flex-grow-0 w-3"/>
          <OutlineButton label={"Cancel"}/>
          <div className="flex-grow-0 w-3"/>
          <ApplyButton/>
        </div>
      </div>
    </>
  )
}

const OutlineButton = ({label}) => {
  return <button>
    <div className="
    bg-white hover:text-secondaryDarkColor
    text-secondaryColor text-[18px] font-semibold
    border-2 hover:border-secondaryDarkColor border-secondaryColor
    rounded p-1"
    >
      <div className="pl-1 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {label}
      </div>
    </div>
  </button>
}

const ApplyButton = () => {
  return <button>
    <div className="
    bg-secondaryColor hover:bg-secondaryDarkColor text-white text-[18px]
    cursor-pointer disabled:cursor-not-allowed
    fill-white rounded p-[6px]"
    >
      <div className="pl-1 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Apply"}
      </div>
    </div>
  </button>
}

const FilterInputElement = (
  {inputProps, labelKey, handleRemove}
) => {
  return <div className="flex flex-row">
      <input
        id={labelKey}
        {...inputProps}
        className="text-[20px] font-semibold border-b-2 py-1 px-1
          outline-none bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline basis-[150px] max-w-[150px] mr-2
        "
      />
      <input
        id={labelKey}
        {...inputProps}
        className="text-[20px] font-semibold border-b-2 py-1 px-1
          outline-none bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline basis-[150px] max-w-[150px] mr-2
        "
      />
      <input
        id={labelKey}
        {...inputProps}
        className="text-[20px] font-semibold border-b-2 py-1 px-1
          outline-none bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline flex-grow
        "
      />

    <div>
      <GenericButton handleClick={handleRemove} additionalStyling={"ml-2 px-3 min-w-min"}>
        {"Delete"}
      </GenericButton>
    </div>
  </div>
}

export default FilterModal
