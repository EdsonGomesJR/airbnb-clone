/* eslint-disable prefer-const */
import prisma from '@/app/libs/prismadb'

export interface IListingParams {
  userId?: string
  guestCount?: number
  roomCount?: number
  bathRoomCount?: number
  startDate?: string
  endDate?: string
  locationValue?: string
  category?: string
}
export default async function getListings(params: IListingParams) {
  try {
    const {
      userId,
      bathRoomCount,
      category,
      endDate,
      guestCount,
      locationValue,
      roomCount,
      startDate,
    } = params

    let query: any = {}

    if (userId) {
      query.userId = userId
    }

    if (category) {
      query.category = category
    }

    if (roomCount) {
      query.roomCount = {
        gte: +roomCount,
      }
    }
    if (bathRoomCount) {
      query.bathRoomCount = {
        gte: +bathRoomCount,
      }
    } // gte : greater than or equal, the + sign transforms de variable that we send as string to be a number
    // we will be able to filter the amount or more that the user query, not less than
    if (guestCount) {
      query.guestCount = {
        gte: +guestCount,
      }
    }

    if (locationValue) {
      query.locationValue = locationValue
    }

    if (startDate && endDate) {
      query.NOT = {
        Reservation: {
          some: {
            OR: [
              {
                endDate: { gte: startDate },
                startDate: { lte: startDate },
              },
              {
                startDate: { lte: endDate },
                endDate: { gte: endDate },
              },
            ],
          },
        },
      }
    }
    const listings = await prisma.listing.findMany({
      where: query,
      orderBy: {
        createdAt: 'desc',
      },
    })
    const safeListing = listings.map((listing) => ({
      ...listing,
      createdAt: listing.createdAt.toISOString(),
    }))
    return safeListing
  } catch (error: any) {
    throw new Error(error)
  }
}
