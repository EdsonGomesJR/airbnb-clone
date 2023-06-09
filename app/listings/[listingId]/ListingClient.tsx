'use client'
import { Container } from '@/app/components/Container'
import ListingHead from '@/app/components/listings/ListingHead'
import { categories } from '@/app/components/navbar/Categories'
import { SafeListing, SafeUser } from '@/app/types'
import { Reservation } from '@prisma/client'
import React, { useMemo } from 'react'

interface ListingClientProps {
  currentUser?: SafeUser | null
  reservations?: Reservation[]

  listing: SafeListing & {
    user: SafeUser
  }
}
function ListingClient({ listing, currentUser }: ListingClientProps) {
  const category = useMemo(() => {
    return categories.find((item) => item.label === listing.category)
  }, [listing.category])
  return (
    <Container>
      <div className="mx-auto max-w-screen-lg">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.price}
            id={listing.id}
            currentId={currentUser}
          />
        </div>
      </div>
    </Container>
  )
}

export default ListingClient