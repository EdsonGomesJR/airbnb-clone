'use client'

import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { SafeUser } from '../types'

interface HeartButtonProps {
  listingId: string
  currentUser?: SafeUser | null
}
export function HeartButton({ listingId, currentUser }: HeartButtonProps) {
  const hasFavorited = false
  const toggleFavorite = () => {}
  return (
    <div
      onClick={toggleFavorite}
      className="relative cursor-pointer transition hover:opacity-80"
    >
      <AiOutlineHeart
        size={28}
        className="absolute -right-[2px] -top-[2px] fill-white"
      />
      <AiFillHeart
        size={24}
        className={hasFavorited ? 'fill-rose-500' : 'fill-neutral-500/70'}
      />
    </div>
  )
}