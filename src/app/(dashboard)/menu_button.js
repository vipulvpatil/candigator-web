const MenuButton = ({title}) => {
  return (
    <button>
      <input class="hidden" type="radio" id={title} name="menuItem" />
      <label
        className="block text-[24px] font-normal text-left text-black hover:text-bold hover:bg-subtle/20 cursor-pointer"
        for={title}
      >
        {title}
      </label>
    </button>
  )
}

export default MenuButton
