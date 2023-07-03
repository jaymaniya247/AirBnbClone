import { Listing, User } from "@prisma/client";

export type safeListing = Omit<Listing, "created_at"> & {
  created_at: string;
};

export type safeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
