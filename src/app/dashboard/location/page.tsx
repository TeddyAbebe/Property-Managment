import React from "react";
import { searchParamsCache } from "@/lib/searchparams";
import { SearchParams } from "nuqs";
import LocationListingPage from "./_components/location-listing-page";

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: "Dashboard : Location",
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <LocationListingPage />;
}
