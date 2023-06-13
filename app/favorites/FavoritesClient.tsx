import { Container } from '../components/Container'
import { Heading } from '../components/Heading'
import { ListingCard } from '../components/listings/ListingCard'
import { SafeListing, SafeUser } from '../types'

interface FavoritesClientProps {
  listings: SafeListing[]
  currentUser?: SafeUser | null
}
export function FavoritesClient({
  listings,
  currentUser,
}: FavoritesClientProps) {
  return (
    <Container>
      <Heading title="Favorites" subtitle="List of places you have favorited" />
      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            data={listing}
            key={listing.id}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  )
}
