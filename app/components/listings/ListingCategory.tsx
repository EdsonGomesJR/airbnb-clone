'use client'

import React from 'react'
import { IconType } from 'react-icons'
interface ListingCategoryProps {
  icon: IconType
  description: string
  label: string
}
function ListingCategory({
  description,
  icon: Icon,
  label,
}: ListingCategoryProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <Icon size={40} className="text-neutral-600" />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{label}</p>
          <p className="font-light text-neutral-500">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ListingCategory
