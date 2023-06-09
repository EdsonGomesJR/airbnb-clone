'use client'
import { SafeUser } from '@/app/types'
import React from 'react'

interface ListingHeadProps {
  title: string
  locatioValue: string
  imageSrc: string
  id: string
  currentUser: SafeUser | null
}

function ListingHead({
  currentUser,
  id,
  imageSrc,
  locatioValue,
  title,
}: ListingHeadProps) {
  return <div>ListingHead</div>
}

export default ListingHead
