import SignInButton from "@/app/(dashboard)/sign_in_button"

const LoginCTAModal = ({show, handleClose}) => {
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
          ml-auto mr-auto w-[55%]
          p-[22px] rounded-lg
          min-h-[200px] max-h-[500px] min-w-[440px]
        bg-white
          drop-shadow-modal
          text-center
        "
      >
        <div className="text-[32px]">AI based resume parsing</div>
        <div className="px-5 pt-2 pb-4 font-semibold">Uploading a resume and parsing it is our defining feature. We would love you try it but it is not available in Test Mode. Please login for free and give it a try.</div>
        <SignInButton/>

      </div>
    </>
  )
}

export default LoginCTAModal
