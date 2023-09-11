import Details from "./details"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

const Settings = async () => {
  const session = await getServerSession(authOptions)
  return <>
    <Details session={session}/>
  </>
}

export default Settings
