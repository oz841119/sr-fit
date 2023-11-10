"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

type MenuItemProps = {name: string, path: string, isActive?: boolean}
const MenuItem = ({name, path, isActive = false}: MenuItemProps) => (
  <Link href={path} className={'w-2/3 text-center py-3 cursor-pointer ' + (isActive ? 'bg-white rounded-lg shadow-sm' : '')}>
    {name}
  </Link>
)

export default function Side({className = ''}) {
  const pathname = usePathname()
  const renderPath = (pageName: string) => '/dashboard' + '/' + pageName
  return (
    <div className={className}>
      <div className="flex flex-col items-center mb-4">
        <div className="w-full text-lg font-bold ml-24 mb-4">紀錄</div>
        <MenuItem name="紀錄訓練" path={renderPath('create-training')} isActive={pathname === renderPath('create-training')}/>
        <MenuItem name="紀錄有氧" path=""/>
      </div>

      <div className="flex flex-col items-center mb-4">
        <div className="w-full text-lg font-bold ml-24 mb-4">分析</div>
        <MenuItem name="訓練分析" path={renderPath('training')} isActive={pathname === renderPath('training')}/>
      </div>

      <div className="flex flex-col items-center">
      <div className="w-full text-lg font-bold ml-24 mb-4">事務</div>
        <MenuItem name="標籤管理" path={renderPath('tag-manage')} isActive={pathname === renderPath('tag-manage')}/>
      </div>
    </div>
  )
}