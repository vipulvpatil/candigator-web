import {BigActionButton} from "./buttons"

const ActionItems = () => {
  return (
    <div className="
      w-full flex
      flex-col items-center
      xl:flex-row xl:justify-around
      gap-y-12 py-12
    ">
      <ActionItem
        label={"Try app features for free. No credit card required."}
        buttonLink="/candidate?p=1"
        buttonLabel="Try for free now"
      />
      <ActionItem
        label={"Check out this detailed walkthrough of all the features."}
        buttonLink="/demo"
        buttonLabel="Feature demo"
      />
    </div>
  )
}

const ActionItem = ({label, buttonLink, buttonLabel}) => {
  return (
    <div className="
      w-[43%] min-w-[500px] max-w-[600px] h-[330px]
      bg-white rounded-lg leading-snug
      flex flex-col justify-around gap-y-6 py-6
    ">
      <div className="
        flex justify-center font-semibold text-[36px] text-center
        min-w-[380px] max-w-[380px] h-[135px] mx-auto
      ">
        {label}
      </div>
      <div className="
        flex justify-center
      ">
        <BigActionButton
          link={buttonLink}
          label={buttonLabel}
        />
      </div>
    </div>
  )
}

export default ActionItems
