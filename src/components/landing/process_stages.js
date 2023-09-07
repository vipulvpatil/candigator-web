import {ProspectStage1Icon, ProspectStage2Icon, ProspectStage3Icon} from "@/icons/logo/process_stages"

const ProcessStages = () => {
  return (
    <div className="
      w-full flex
      flex-col items-center
      xl:flex-row xl:justify-around
      gap-y-12
    ">
      <ProcessStage
        icon={<ProspectStage1Icon/>}
        title="AI powered data extraction"
        detail="The latest development in AI coupled with continuously updated prompts deliver the best data extraction"
      />
      <ProcessStage
        icon={<ProspectStage2Icon/>}
        title="Efficient information parsing"
        detail="Conversion of data into a custom format leads to more efficient organization and indexing of data"
      />
      <ProcessStage
        icon={<ProspectStage3Icon/>}
        title="Advanced search capabilities"
        detail="Multiple filtering options powers our elaborate search system that delivers more more accurate results"
      />
    </div>
  )
}

const ProcessStage = ({icon, title, detail}) => {
  return (
    <div className="
      w-[360px] h-[410px]
      border-2 border-subtleColor rounded-lg
      flex flex-col justify-evenly items-center text-center
    ">
      <div className="w-12 h-[74px]">
        {icon}
      </div>
      <div className="
        w-[310px] h-[80px]
        text-[24px] text-white font-bold
      ">
        {title}
      </div>
      <div className="
        w-[310px] h-[120px]
        text-[20px] text-white font-semibold
      ">
        {detail}
      </div>
    </div>
  )
}

export default ProcessStages
