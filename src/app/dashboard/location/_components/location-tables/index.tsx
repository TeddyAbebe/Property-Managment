"use client";

import { DataTable } from "@/components/ui/table/data-table";
// import { DataTableFilterBox } from "@/components/ui/table/data-table-filter-box";
import { DataTableResetFilter } from "@/components/ui/table/data-table-reset-filter";
import { DataTableSearch } from "@/components/ui/table/data-table-search";

import { columns } from "./columns";
import { useLocationTableFilters } from "./use-location-table-filters";
import { Location } from "@/types";

// export const SITE_NAME_OPTIONS = [
//   { value: "Site A", label: "Site A" },
//   { value: "Site B", label: "Site B" },
// ];

// export const FLOOR_OPTIONS = [
//   { value: "1-5", label: "1-5 Floors" },
//   { value: "6-10", label: "6-10 Floors" },
//   { value: "11-20", label: "11-20 Floors" },
// ];

export default function LocationTable({
  data,
  totalData,
}: {
  data: Location[];
  totalData: number;
}) {
  const {
    // siteNameFilter,
    // setSiteNameFilter,
    // totalFloorsFilter,
    // setTotalFloorsFilter,
    isAnyFilterActive,
    resetFilters,
    searchQuery,
    setPage,
    setSearchQuery,
  } = useLocationTableFilters();

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-4">
        <DataTableSearch
          searchKey="name"
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setPage={setPage}
        />
        {/* <DataTableFilterBox
          filterKey="siteName"
          title="Site Name"
          options={SITE_NAME_OPTIONS}
          setFilterValue={setSiteNameFilter}
          filterValue={siteNameFilter}
        />
        <DataTableFilterBox
          filterKey="totalFloors"
          title="Total Floors"
          options={FLOOR_OPTIONS}
          setFilterValue={setTotalFloorsFilter}
          filterValue={totalFloorsFilter}
        /> */}

        <DataTableResetFilter
          isFilterActive={isAnyFilterActive}
          onReset={resetFilters}
        />
      </div>
      <DataTable columns={columns} data={data} totalItems={totalData} />
    </div>
  );
}
