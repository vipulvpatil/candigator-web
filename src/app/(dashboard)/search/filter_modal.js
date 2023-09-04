import * as yup from "yup"
import {useFieldArray, useForm} from "react-hook-form"
import GenericButton from "@/components/generic_button"
import {useRef} from "react"
import {yupResolver} from "@hookform/resolvers/yup"

const searchFilterSchema = yup.object().shape({
  searchFilters: yup.array().of(
    yup.object().shape({
      criteria: yup.string(),
      comparator: yup.string(),
      value: yup.mixed(),
    })
  )
})

const FilterModal = ({show, handleClose}) => {
  const form = useRef()
  const {
    register, handleSubmit, formState: {errors}, control, reset} = useForm(
    {
      resolver: yupResolver(searchFilterSchema),
      defaultValues: {searchFilters:[]},
    }
  )

  const {
    fields: searchFilters,
    append: appendFilter,
    remove: removeFilter,
  }  = useFieldArray({name: "searchFilters", control})

  const closeModal = () => {
    handleClose()
  }

  const applyFilter = (data) => {
    console.log("applying filter")
    console.log(data)
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
          overflow-y-scroll
        "
      >
        <div className="text-[24px] mt-[-10px] font-semibold float-left">
          {"Set filters"}
        </div>
        <div className="clear-both"/>
        <form
          onSubmit={handleSubmit(applyFilter)}
          className="w-full"
          ref={form}
        >
          {searchFilters.map((field, index) => {
            return <div key={field.id}>
              <FilterInputElement
                inputCriteriaProps={register(`searchFilters.${index}.criteria`)}
                inputComparatorProps={register(`searchFilters.${index}.comparator`)}
                inputValueProps={register(`searchFilters.${index}.value`)}
                handleRemove={() => removeFilter(index)}
              />
            </div>
          })}
        </form>
        <div className="float-left pt-2">
          <GenericButton
            handleClick={() => {
              appendFilter({
                criteria: "default",
                comparator: "pick one",
                value: "",
              })
            }}
            additionalStyling={"px-3"}>
            {"Add Filter"}
          </GenericButton>
        </div>
        <div className="flex-grow clear-both"/>
        <div className="float-right flex flex-row">
          <div className="flex-grow"/>
          <OutlineButton label={"Reset"}
            handleClick={() => reset()}
          />
          <div className="flex-grow-0 w-3"/>
          <OutlineButton label={"Cancel"}/>
          <div className="flex-grow-0 w-3"/>
          <ApplyButton handleClick={
            () => {
              console.log(errors)
              form.current.dispatchEvent(
                new Event("submit", {cancelable: true, bubbles: true})
            )}
          }/>
        </div>
      </div>
    </>
  )
}

const OutlineButton = ({label, handleClick}) => {
  return <button onClick={handleClick}>
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

const ApplyButton = ({handleClick}) => {
  return <button onClick={handleClick}>
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
  {inputCriteriaProps, inputComparatorProps, inputValueProps, handleRemove}
) => {
  return <div className="flex flex-row">
      <input
        {...inputCriteriaProps}
        className="text-[20px] font-semibold border-b-2 py-1 px-1
          outline-none bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline basis-[150px] max-w-[150px] mr-2
        "
      />
      <input
        {...inputComparatorProps}
        className="text-[20px] font-semibold border-b-2 py-1 px-1
          outline-none bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline basis-[150px] max-w-[150px] mr-2
        "
      />
      <input
        {...inputValueProps}
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
