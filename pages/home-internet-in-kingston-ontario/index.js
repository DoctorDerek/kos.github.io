import { useRouter } from "next/router"
import { useEffect } from "react"
import ResidentialServices from "./residential-services.js"

export default function IndexRedirect() {
  const target = "home-internet-in-kingston-ontario/residential-services"
  const router = useRouter()
  useEffect(() => {
    router.prefetch(target)
    router.push(target)
  }, [])
  return ResidentialServices
}
