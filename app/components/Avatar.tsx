'use client'

import Image from 'next/image'

export function Avatar() {
  return (
    <Image
      src="/images/placeholder.jpg"
      className="rounded-full"
      width={30}
      height={30}
      alt="Avatar"
    />
  )
}
