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
          min-h-[200px] max-h-[500px] min-w-[400px]
        bg-white
          drop-shadow-modal
          text-left
          flex flex-col
        "
      >
        <div className="text-[24px] mt-[-10px] font-semibold float-left">Set filters</div>
        <div className="clear-both"/>
        <div className="float-left border-t-2 border-subtleColor pt-2"><AddFilterButton/></div>
        <div className="flex-grow clear-both"/>
        <div className="float-right flex flex-row">
          <div className="flex-grow"/>
          <CancelButton/>
          <div className="flex-grow-0 w-4"/>
          <ApplyButton/>
        </div>
      </div>
    </>
  )
}

const AddFilterButton = () => {
  return <button>
    <div className="
    bg-primaryColor hover:bg-primaryDarkColor text-white text-[18px]
    cursor-pointer disabled:cursor-not-allowed
    fill-white rounded py-[2px] px-[6px]"
    >
      <div className="inline-flex align-middle relative top-[-2px] font-semibold">
        {"Add Filter"}
      </div>
    </div>
  </button>
}

const CancelButton = () => {
  return <button>
    <div className="
    bg-white hover:text-secondaryDarkColor
    text-secondaryColor text-[18px] font-semibold
    border-2 hover:border-secondaryDarkColor border-secondaryColor
    rounded p-1"
    >
      <div className="pl-1 pr-1 inline-flex align-middle relative top-[-2px] font-semibold">
        {"Cancel"}
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

export default FilterModal
