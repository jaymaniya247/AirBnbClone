import prisma from "@/app/libs/prismadb";

export default async function getListings() {
  try {
    const listings = await prisma.listing.findMany({
      orderBy: { created_at: "desc" },
    });

    const safeListings = listings.map((listing) => ({
      ...listing,
      createdAt: listing.created_at.toISOString(),
    }));

    return safeListings;
  } catch (error: any) {
    throw new Error(error);
  }
}
