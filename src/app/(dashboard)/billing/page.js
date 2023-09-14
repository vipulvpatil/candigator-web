import Details from "./details"
import GrpcService from "@/lib/grpc/service"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"

export const metadata = {
  title: "Prospect Billing",
}

const Billing = async () => {
  const session = await getServerSession(authOptions)
  let userData
  if (session) {
    const response = await GrpcService.getUserData(session.user.email)
    userData = response.data
  }
  return <>
    <Details session={session} userData={userData}/>
  </>
}

export default Billing
