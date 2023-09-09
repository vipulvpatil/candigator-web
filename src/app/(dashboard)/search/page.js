import GrpcService from "@/lib/grpc/service"
import SearchResults from "./search_results"
import {authOptions} from "@/app/api/auth/[...nextauth]/route"
import {getServerSession} from "next-auth"
import {processCandidates} from "@/lib/candidate-builder/candidate"

const Search = async () => {
  let candidates
  const session = await getServerSession(authOptions)
  if(session) {
    const response = await GrpcService.getCandidates(session.user.email)
    candidates = processCandidates(response.data)
    console.log(candidates)
  }

  return <SearchResults candidates={candidates} loggedIn={!!session}/>
}

export default Search
