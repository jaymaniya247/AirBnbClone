"use client";

import Container from "../components/Container";
import Heading from "../components/Heading";
import ListingCard from "../components/listings/ListingCard";
import { safeListing, safeUser } from "../types";

interface FavouriteClient {
  listings: safeListing[];
  currentUser?: safeUser | null;
}

const FavouriteClient: React.FC<FavouriteClient> = ({
  listings,
  currentUser,
}) => {
  return (
    <Container>
      <Heading title="Favourites" subtitle="List of Your Favourite Places" />
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
        {listings.map((listing) => (
          <ListingCard
            key={listing.id}
            data={listing}
            currentUser={currentUser}
          />
        ))}
      </div>
    </Container>
  );
};

export default FavouriteClient;
