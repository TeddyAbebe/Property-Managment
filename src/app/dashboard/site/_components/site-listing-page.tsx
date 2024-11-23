"use client";

import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import SiteTable from "./site-tables";
import { useFetchSitesQuery } from "@/redux/features/api-slice";
import { useSearchParams } from "next/navigation";

export default function SiteListingPage() {
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

  const { data, error, isLoading } = useFetchSitesQuery(filters);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching locations.</div>;
  }

  const totalSites = data?.data?.length || 0;
  const sites = data?.data || [];

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Total Sites - ${totalSites}`}
            description="Manage Sites."
          />

          <Link
            href={"/dashboard/site/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <SiteTable data={sites} totalData={totalSites} />
      </div>
    </PageContainer>
  );
}
