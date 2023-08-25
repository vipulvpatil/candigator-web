export const PageTitleWithIcon = ({icon, title}) => {
  return <>
    <div className="inline-flex align-top w-[44px] fill-black/50">
      {icon}
    </div>
    <div className="inline-flex align-top text-[32px] font-semibold text-black/70">
      {title}
    </div>
  </>
}

export const PageTitle = ({title}) => {
  return <>
    <div className="inline-flex align-top text-[28px] font-semibold text-black/70">
      {title}
    </div>
  </>
}
