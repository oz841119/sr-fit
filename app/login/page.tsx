"use client"

import Fetcher from "@/utils/srFetcher"
import { useRouter } from "next/navigation"
import { useState } from "react"

const getAccessToken = async (account: string, password: string) => {
  const API_URL = process.env.NEXT_PUBLIC_BASE_API_URL + '/auth/login'
  const res = await Fetcher.post(API_URL, {account, password}, false)
  if(res.ok) {
    const {access_token: accessToken} = await res.json()
    return accessToken
  }
  else {
    throw new Error(res.status.toString())
  }
}

export default function Login() {
  const router = useRouter()
  const [account, setAccount] = useState('')
  const [password, setPassword] = useState('')
  const loginWithCertificate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const accessToken = await getAccessToken(account, password)
      localStorage.setItem("accessToken", 'Bearer ' + accessToken)
      router.push('/dashboard')
    }
    catch(err) {
      if(err instanceof Error) {
        console.error('帳密錯誤')
      }
    }
  }
  return (
    <div>
      <form onSubmit={loginWithCertificate}>
        <input type="text" value={account} onChange={(e) => setAccount(e.target.value)}/>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <button type="submit">登入</button>
      </form>
    </div>
  )
}