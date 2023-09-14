import ActionItem from "./action_item"

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
        buttonLink="/candidates?testMode=true"
        buttonLabel="Try now for free"
      />
      <ActionItem
        label={"Check out this detailed walkthrough of all the features."}
        buttonLink="/demo"
        buttonLabel="Feature demo"
      />
    </div>
  )
}

export default ActionItems
