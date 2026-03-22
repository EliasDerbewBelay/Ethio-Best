"use client";

import React, { useState } from "react";
import ListPropertyCard from "@/components/cardModels/ListpropertyCard";
import { PROPERTIES, FILTER_OPTIONS, VIEW_MODES, PAGINATION } from "@/constants/property";
import type { ViewMode } from "@/types/property";

const Page: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>(VIEW_MODES.GRID);
  const [sortBy, setSortBy] = useState<"newest" | "price-low" | "price-high">("newest");
  const [selectedPropertyType, setSelectedPropertyType] = useState<string>("All Properties");
  const [selectedLocation, setSelectedLocation] = useState<string>("All Locations");
  const [selectedPriceRange, setSelectedPriceRange] = useState<number>(0);
  const [selectedBeds, setSelectedBeds] = useState<number>(0);
  const [selectedBaths, setSelectedBaths] = useState<number>(0);
  const [showPropertyTypeFilter, setShowPropertyTypeFilter] = useState<boolean>(false);
  const [showLocationFilter, setShowLocationFilter] = useState<boolean>(false);

  // Filter properties logic (Unchanged)
  const filteredProperties = PROPERTIES.filter((property) => {
    if (selectedPropertyType !== "All Properties") {
      if (!property.title.toLowerCase().includes(selectedPropertyType.toLowerCase())) return false;
    }
    if (selectedLocation !== "All Locations") {
      if (!property.location.toLowerCase().includes(selectedLocation.toLowerCase())) return false;
    }
    const priceRange = FILTER_OPTIONS.priceRanges[selectedPriceRange];
    if (priceRange && (property.price < priceRange.min || property.price > priceRange.max)) return false;
    if (selectedBeds > 0 && property.beds < selectedBeds) return false;
    if (selectedBaths > 0 && property.baths < selectedBaths) return false;
    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  const activeFiltersCount = [
    selectedPropertyType !== "All Properties",
    selectedLocation !== "All Locations",
    selectedPriceRange !== 0,
    selectedBeds !== 0,
    selectedBaths !== 0,
  ].filter(Boolean).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-4">
            <div>
              <h1 className="text-xl md:text-3xl font-bold text-gray-900 leading-tight">
                Ethio Best Real Estate
              </h1>
              <p className="text-xs md:text-sm text-gray-600 mt-0.5">
                Homes / For Rent in Addis Ababa
              </p>
            </div>
            <div className="text-xs md:text-sm text-gray-500 font-medium">
              {filteredProperties.length} properties available
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar - Horizontally scrollable on mobile */}
      <div className="bg-white border-b border-gray-200 sticky top-[73px] md:top-[88px] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
            {/* Property Type */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => {
                  setShowPropertyTypeFilter(!showPropertyTypeFilter);
                  setShowLocationFilter(false);
                }}
                className="whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center gap-1.5"
              >
                Property Type <span className="text-[10px]">▼</span>
              </button>
              {showPropertyTypeFilter && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[200px]">
                  {FILTER_OPTIONS.propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedPropertyType(type);
                        setShowPropertyTypeFilter(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        selectedPropertyType === type ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className="relative flex-shrink-0">
              <button
                onClick={() => {
                  setShowLocationFilter(!showLocationFilter);
                  setShowPropertyTypeFilter(false);
                }}
                className="whitespace-nowrap px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center gap-1.5"
              >
                Location <span className="text-[10px]">▼</span>
              </button>
              {showLocationFilter && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-xl z-50 min-w-[200px] max-h-64 overflow-y-auto">
                  {FILTER_OPTIONS.locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationFilter(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        selectedLocation === location ? "bg-blue-50 text-blue-600 font-semibold" : "text-gray-700"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
              className="flex-shrink-0 px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer outline-none"
            >
              {FILTER_OPTIONS.priceRanges.map((range, index) => (
                <option key={index} value={index}>{range.label}</option>
              ))}
            </select>

            {/* Beds */}
            <select
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(Number(e.target.value))}
              className="flex-shrink-0 px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer outline-none"
            >
              <option value={0}>Beds</option>
              {FILTER_OPTIONS.bedOptions.map((bed) => (
                <option key={bed} value={bed}>{bed === 0 ? "Any" : `${bed}+ Beds`}</option>
              ))}
            </select>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="flex-shrink-0 px-3 py-2 text-xs md:text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer outline-none"
            >
              {FILTER_OPTIONS.sortOptions.map((option) => (
                <option key={option.value} value={option.value}>Sort: {option.label}</option>
              ))}
            </select>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  setSelectedPropertyType("All Properties");
                  setSelectedLocation("All Locations");
                  setSelectedPriceRange(0);
                  setSelectedBeds(0);
                  setSelectedBaths(0);
                }}
                className="whitespace-nowrap px-3 py-2 text-xs md:text-sm font-bold text-red-600 hover:text-red-700 transition"
              >
                Clear ({activeFiltersCount})
              </button>
            )}

            <div className="flex-grow"></div>

            {/* View Mode (Hidden on small mobile) */}
            <div className="hidden md:flex gap-1 bg-gray-100 rounded-lg p-1 flex-shrink-0">
              <button
                onClick={() => setViewMode(VIEW_MODES.GRID)}
                className={`p-1.5 rounded-md transition ${viewMode === VIEW_MODES.GRID ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode(VIEW_MODES.LIST)}
                className={`p-1.5 rounded-md transition ${viewMode === VIEW_MODES.LIST ? "bg-white text-blue-600 shadow-sm" : "text-gray-500"}`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {sortedProperties.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100">
            <p className="text-gray-400 text-lg">No properties found matching your criteria.</p>
            <button 
              onClick={() => setSelectedPropertyType("All Properties")}
              className="mt-4 text-blue-600 font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <>
            <div className={
                viewMode === VIEW_MODES.GRID
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {sortedProperties.map((property) => (
                <ListPropertyCard key={property.id} property={property} viewMode={viewMode} />
              ))}
            </div>

            {/* Pagination - Full Width Mobile */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <p className="text-gray-500 text-xs md:text-sm">
                Showing {Math.min(PAGINATION.ITEMS_PER_PAGE, sortedProperties.length)} of {sortedProperties.length} properties
              </p>
              
              <div className="flex items-center gap-1 md:gap-2">
                <button className="px-3 py-1.5 text-xs md:text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Prev</button>
                <button className="px-3.5 py-1.5 text-xs md:text-sm text-white bg-blue-600 rounded-lg font-bold">1</button>
                <button className="px-3.5 py-1.5 text-xs md:text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">2</button>
                <button className="px-3 py-1.5 text-xs md:text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50">Next</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;