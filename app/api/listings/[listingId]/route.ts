import { NextResponse } from 'next/server'

import getCurrentUser from '@/app/actions/getCurrentUser'
import prisma from '@/app/libs/prismadb'

interface IParams {
  listingId?: string
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams },
) {
  const currentUser = await getCurrentUser()

  if (!currentUser) {
    return NextResponse.error()
  }
  const { listingId } = params
  // checa se o tipo do listingId é correto
  if (!listingId || typeof listingId !== 'string') {
    throw new Error('Invalid ID')
  }
  // usando deleteMany pq não da pra passar multiplos where no delete, o currentUser será o proprietario da listagem
  const listing = await prisma.listing.deleteMany({
    where: {
      id: listingId,
      userId: currentUser.id,
    },
  })

  return NextResponse.json(listing)
}
