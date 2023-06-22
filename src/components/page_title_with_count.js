const PageTitleWithCount = ({icon, title}) => {
  return <>
    <div className="inline-flex align-middle w-[44px] fill-black/50 relative top-[-19px] left-[-4px]">
      {icon}
    </div>
    <div className="inline-flex text-[32px] font-regular text-black/50 relative top-[-9px] left-[-4px]">
      {title}
    </div>
  </>
}

export default PageTitleWithCount
