import Fetcher from "@/utils/srFetcher"
import { useEffect, useState } from "react"

interface APIUser {
  account: string
}
const useAPIuser = function(defaultUser: APIUser) {
  const [user, setUser] = useState<APIUser>(defaultUser)
  useEffect(() => {
    const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL + '/user'
    Fetcher.withJWT().get<APIUser>(API_URL).then(user => {
      setUser(user)
    })
  }, [])
  return { user }
}

export {
  useAPIuser
}