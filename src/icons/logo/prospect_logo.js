
const ProspectLogo = ({dotColor, mainColor}) => {
  const colorForDot = dotColor || "white"
  const colorForMain = mainColor || "white"
  return (
    <>
      <svg fill="none" viewBox="0 0 210 321">
        <path fill={`${colorForDot}`} d="M95 55c0 24.853-20.147 45-45 45S5 79.853 5 55s20.147-45 45-45 45 20.147 45 45Z"/>
        <path fill={`${colorForMain}`} d="M110 5c0-2.761 2.24-5.013 4.998-4.875a99.996 99.996 0 0 1 87.39 61.607 100.006 100.006 0 0 1 7.487 33.27C210.013 97.76 207.761 100 205 100h-90a5 5 0 0 1-5-5V5ZM100 316c0 2.761-2.24 5.013-4.998 4.875a100.005 100.005 0 0 1-87.39-61.607 99.996 99.996 0 0 1-7.487-33.27C-.013 223.24 2.239 221 5 221h90a5 5 0 0 1 5 5v90ZM0 116a5 5 0 0 1 5-5h200.238a4.762 4.762 0 0 1 4.762 4.762C210 168.36 167.36 211 114.762 211H5a5 5 0 0 1-5-5v-90Z"/></svg>
    </>
  )
}

export default ProspectLogo
