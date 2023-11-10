import { Suspense } from "react"
import Side from "./Side"
import TopBarUser from "./TopBarUser"
import Loading from "./loading"
export default function DashboardLayout(props: React.PropsWithChildren) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="h-24 flex items-center mr-12">
        <h1 className="w-48 text-center font-bold text-lg">SR FITNESS</h1>
        <TopBarUser className="ml-auto"/>
      </div>
      <div className="flex">
        <Side className="w-72"></Side>
        <div className="flex-1">
          <Suspense fallback={<Loading/>}>
            {props.children}
          </Suspense>
        </div>
      </div>
    </div>
  )
}