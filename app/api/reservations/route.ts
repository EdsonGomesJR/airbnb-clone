import { NextResponse } from 'next/server'

import prisma from '@/app/libs/prismadb'
import getCurrentUser from '@/app/actions/getCurrentUser'

export async function POST(request: Request) {
  const currentuser = await getCurrentUser()

  if (!currentuser) {
    return NextResponse.error()
  }
  const body = await request.json()

  const { listingId, startDate, endDate, totalPrice } = body

  if (!listingId || !startDate || !endDate || !totalPrice) {
    return NextResponse.error()
  }
  // update the current listing and create a reservation, we link the relation between listing and reservation

  const listingAndReservation = await prisma.listing.update({
    where: {
      id: listingId,
    },
    data: {
      Reservation: {
        create: {
          userId: currentuser.id,
          startDate,
          endDate,
          totalPrice,
        },
      },
    },
  })
  return NextResponse.json(listingAndReservation)
}
