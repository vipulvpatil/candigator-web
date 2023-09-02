import GrpcService from "@/lib/grpc/service"
import SearchResults from "./search_results"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const Search = async () => {
  const session = await getServerSession(authOptions)
  if(!session) {
    return <></>
  }

  const response = await GrpcService.getCandidates(session.user.email)
  const candidates = processCandidates(response.data)
  console.log(candidates)

  return (
    <div className="min-h-[620px] bg-gray-200">
      <SearchResults candidates={candidates}/>
    </div>
  )
}

export default Search
