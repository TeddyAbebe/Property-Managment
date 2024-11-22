"use client";

import { searchParams } from "@/lib/searchparams";
import { useQueryState } from "nuqs";
import { useCallback, useMemo } from "react";

export function useBuildingTableFilters() {
  const [searchQuery, setSearchQuery] = useQueryState(
    "q",
    searchParams.q
      .withOptions({ shallow: false, throttleMs: 1000 })
      .withDefault("")
  );

  const [siteNameFilter, setSiteNameFilter] = useQueryState(
    "siteName",
    searchParams.siteName.withOptions({ shallow: false }).withDefault("")
  );

  const [totalFloorsFilter, setTotalFloorsFilter] = useQueryState(
    "totalFloors",
    searchParams.totalFloors.withOptions({ shallow: false }).withDefault("")
  );

  const [page, setPage] = useQueryState(
    "page",
    searchParams.page.withDefault(1)
  );

  const resetFilters = useCallback(() => {
    setSearchQuery(null);
    setSiteNameFilter(null);
    setTotalFloorsFilter(null);
    setPage(1);
  }, [setSearchQuery, setSiteNameFilter, setTotalFloorsFilter, setPage]);

  const isAnyFilterActive = useMemo(() => {
    return !!searchQuery || !!siteNameFilter || !!totalFloorsFilter;
  }, [searchQuery, siteNameFilter, totalFloorsFilter]);

  return {
    searchQuery,
    setSearchQuery,
    siteNameFilter,
    setSiteNameFilter,
    totalFloorsFilter,
    setTotalFloorsFilter,
    page,
    setPage,
    resetFilters,
    isAnyFilterActive,
  };
}
