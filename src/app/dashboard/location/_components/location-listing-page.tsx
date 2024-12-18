"use client";

import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import LocationTable from "./location-tables";
import { useFetchLocationsQuery } from "@/redux/features/api-slice";
import { useSearchParams } from "next/navigation";

export default function LocationListingPage() {
  const searchParams = useSearchParams();

  // Get query parameters
  const page = searchParams.get("page");
  const search = searchParams.get("q");
  const siteName = searchParams.get("siteName");
  const pageLimit = searchParams.get("limit");

  const filters = {
    page: page || undefined,
    limit: pageLimit || undefined,
    ...(search && { search }),
    ...(siteName && { siteNames: siteName }),
  };

  const { data, error, isLoading } = useFetchLocationsQuery(filters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching locations.</div>;
  }

  const totalLocations = data?.data?.length || 0;
  const location = data?.data || [];

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Total Locations - ${totalLocations}`}
            description="Manage locations."
          />
          <Link
            href={"/dashboard/location/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <LocationTable data={location} totalData={totalLocations} />
      </div>
    </PageContainer>
  );
}
