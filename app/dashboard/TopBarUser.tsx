"use client"
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { useAPIuser } from "@/hook/apiHook"
import { useRouter } from 'next/navigation';
export default function TopBarUser({className = ''}) {
  const router = useRouter()
  const { user } = useAPIuser({account: '......'})
  const logout = () => {
    localStorage.removeItem('accessToken')
    router.push('/login')
  }
  return (
    <div className={' flex items-center gap-1 ' + className}>
      <span className={className}>{user.account}</span>
      <RiLogoutBoxRLine className="cursor-pointer" onClick={logout}/>
    </div>
  )
}