import * as yup from "yup"
import {Controller, useFieldArray, useForm} from "react-hook-form"
import {comparatorOptions, criteriaOptions, sanitizeFilters} from "@/lib/search/filter"
import {useEffect, useRef} from "react"
import GenericButton from "@/components/generic_button"
import Select from "react-select"
import {yupResolver} from "@hookform/resolvers/yup"

const searchFilterSchema = yup.object().shape({
  filters: yup.array().of(
    yup.object().shape({
      criteria: yup.string().oneOf(criteriaOptions.map(obj => obj.value)),
      comparator: yup.string().oneOf(comparatorOptions.map(obj => obj.value)),
      value: yup.mixed(),
    })
  )
})

const FilterModal = ({setSearchFilters, searchFilters, show, handleClose}) => {
  const form = useRef()
  const {
    register, handleSubmit, formState: {errors}, control, reset} = useForm(
    {
      resolver: yupResolver(searchFilterSchema),
      values: {filters:[searchFilters]}
    }
  )

  useEffect(() => {
    if (show){
      reset({filters: searchFilters})
    }
  }, [reset, show, searchFilters])

  const {
    fields: filters,
    append: appendFilter,
    replace: replaceFilter,
    remove: removeFilter,
  }  = useFieldArray({name: "filters", control})

  const closeModal = () => {
    handleClose()
  }

  const applyFilter = (data) => {
    const sanitizedFilters = sanitizeFilters(data.filters)
    setSearchFilters(sanitizedFilters)
    closeModal()
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
          p-[22px] rounded-lg h-[500px] min-w-[700px]
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
          {filters.map((field, index) => {
            return <div key={field.id}>
              <FilterInputElement
                inputCriteriaName={`filters.${index}.criteria`}
                inputComparatorName={`filters.${index}.comparator`}
                inputValueProps={register(`filters.${index}.value`)}
                handleRemove={() => removeFilter(index)}
                control={control}
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
          <OutlineButton label={"Clear"}
            handleClick={() => replaceFilter([])}
          />
          <div className="flex-grow-0 w-3"/>
          <OutlineButton label={"Cancel"}
            handleClick={() => closeModal()}
          />
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
  {inputCriteriaName, inputComparatorName, inputValueProps, handleRemove, control}
) => {
  return <div className="
    flex flex-wrap gap-2 place-content-between
    border-2 border-subtleColor p-2 rounded-md my-4
  ">
    <div className="w-[47%]">
      <Controller
        name={inputCriteriaName}
        control={control}
        render={({field: {onChange, onBlur, value, name, ref}}) => {
          return <Select
          maxMenuHeight={150}
          onChange={val => onChange(val.value)}
          onBlur={onBlur}
          value={criteriaOptions.find(c => c.value === value)}
          name={name}
          inputRef={ref}
          options={criteriaOptions}
          placeholder="Select Criteria"
          className="text-[20px] font-semibold
          bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline
          "
          />
        }}
      />
    </div>

    <div className="w-[47%]">
      <Controller
        name={inputComparatorName}
        control={control}
        render={({field: {onChange, onBlur, value, name, ref}}) => {
          return <Select
          maxMenuHeight={150}
          onChange={val => onChange(val.value)}
          onBlur={onBlur}
          value={comparatorOptions.find(c => c.value === value)}
          name={name}
          inputRef={ref}
          options={comparatorOptions}
          placeholder="Select Comparator"
          className="text-[20px] font-semibold
          bg-subtleColor/50 focus:bg-subtleColor/70
          text-black/80 inline
          "
          />
        }}
      />
    </div>
    <div className="flex-grow">
      <input
        {...inputValueProps}
        className="text-[20px] font-semibold py-1 px-1
        outline-none bg-subtleColor/50 focus:bg-subtleColor/70
        text-black/80 inline w-full
        "
        placeholder="value"
      />
    </div>

    <div>
      <GenericButton handleClick={handleRemove} additionalStyling={"ml-2 px-3 min-w-min"}>
        {"Delete"}
      </GenericButton>
    </div>
  </div>
}

export default FilterModal