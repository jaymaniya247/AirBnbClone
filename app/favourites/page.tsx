import getCurrentUser from "../actions/getCurrentUser";
import getFavouriteListings from "../actions/getFavouriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavouriteClient from "./FavouriteClient";

const ListingPage = async () => {
  const listings = await getFavouriteListings();
  const currentUser = await getCurrentUser();
  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No Favourites Found"
          subtitle="Looks Like You Don't have any Favourite Listings"
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavouriteClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default ListingPage;
