'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
export function Logo() {
  const router = useRouter()
  return <Image alt="Logo" height={100} width={100} src={'/images/logo.png'} />
}
