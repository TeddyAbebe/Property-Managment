import PageContainer from "@/components/layout/page-container";
import { buttonVariants } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Building, fakeBuildings } from "@/constants/mock-api";
import { searchParamsCache } from "@/lib/searchparams";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Link from "next/link";
import BuildingTable from "./location-tables";

export default async function BuildingListingPage() {
  // Showcasing the use of search params cache in nested RSCs
  const page = searchParamsCache.get("page");
  const search = searchParamsCache.get("q");
  const siteName = searchParamsCache.get("siteName");
  const totalFloor = searchParamsCache.get("totalFloors");
  const pageLimit = searchParamsCache.get("limit");

  const filters = {
    page,
    limit: pageLimit,
    ...(search && { search }),
    ...(totalFloor && { totalFloors: totalFloor }),
    ...(siteName && { siteNames: siteName }),
  };

  // mock api call
  const data = await fakeBuildings.getBuildings(filters);
  const totalBuildings = data.totalBuildings;
  const building: Building[] = data.buildings;

  return (
    <PageContainer scrollable>
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <Heading
            title={`Total Buildings - ${totalBuildings}`}
            description="Manage buildings."
          />

          <Link
            href={"/dashboard/building/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />
        <BuildingTable data={building} totalData={totalBuildings} />
      </div>
    </PageContainer>
  );
}
