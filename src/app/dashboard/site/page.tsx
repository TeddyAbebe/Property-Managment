import { searchParamsCache } from "@/lib/searchparams";
import { SearchParams } from "nuqs";
import React from "react";
import SiteListingPage from "./_components/site-listing-page";

type pageProps = {
  searchParams: SearchParams;
};

export const metadata = {
  title: "Dashboard : Sites",
};

export default async function Page({ searchParams }: pageProps) {
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  return <SiteListingPage />;
}
