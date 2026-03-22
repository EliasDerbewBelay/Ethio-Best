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

  // Filter properties based on selected filters
  const filteredProperties = PROPERTIES.filter((property) => {
    // Filter by property type
    if (selectedPropertyType !== "All Properties") {
      if (!property.title.toLowerCase().includes(selectedPropertyType.toLowerCase())) {
        return false;
      }
    }

    // Filter by location
    if (selectedLocation !== "All Locations") {
      if (!property.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
        return false;
      }
    }

    // Filter by price range
    const priceRange = FILTER_OPTIONS.priceRanges[selectedPriceRange];
    if (priceRange && (property.price < priceRange.min || property.price > priceRange.max)) {
      return false;
    }

    // Filter by beds
    if (selectedBeds > 0 && property.beds < selectedBeds) {
      return false;
    }

    // Filter by baths
    if (selectedBaths > 0 && property.baths < selectedBaths) {
      return false;
    }

    return true;
  });

  const sortedProperties = [...filteredProperties].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    if (sortBy === "newest") return b.id - a.id;
    return 0;
  });

  // Count active filters
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
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ethiopian Homes For Sale</h1>
              <p className="text-gray-600 mt-1">Homes / For Rent in Addis Ababa</p>
            </div>
            <div className="text-sm text-gray-500">
              {filteredProperties.length} properties available
            </div>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-[88px] z-10000">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-3">
            {/* Property Type Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowPropertyTypeFilter(!showPropertyTypeFilter);
                  setShowLocationFilter(false);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
              >
                Property Type ▼
              </button>
              {showPropertyTypeFilter && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[200px]">
                  {FILTER_OPTIONS.propertyTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => {
                        setSelectedPropertyType(type);
                        setShowPropertyTypeFilter(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        selectedPropertyType === type ? "bg-blue-50 text-blue-600" : "text-gray-700"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowLocationFilter(!showLocationFilter);
                  setShowPropertyTypeFilter(false);
                }}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition flex items-center gap-2"
              >
                Location ▼
              </button>
              {showLocationFilter && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 min-w-[200px] max-h-64 overflow-y-auto">
                  {FILTER_OPTIONS.locations.map((location) => (
                    <button
                      key={location}
                      onClick={() => {
                        setSelectedLocation(location);
                        setShowLocationFilter(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                        selectedLocation === location ? "bg-blue-50 text-blue-600" : "text-gray-700"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Price Range Dropdown */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {FILTER_OPTIONS.priceRanges.map((range, index) => (
                <option key={index} value={index}>
                  {range.label} ▼
                </option>
              ))}
            </select>

            {/* Beds Dropdown */}
            <select
              value={selectedBeds}
              onChange={(e) => setSelectedBeds(Number(e.target.value))}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value={0}>Beds ▼</option>
              {FILTER_OPTIONS.bedOptions.map((bed) => (
                <option key={bed} value={bed}>
                  {bed === 0 ? "Any" : `${bed}+ bed${bed > 1 ? "s" : ""}`}
                </option>
              ))}
            </select>

            {/* Baths Dropdown */}
            <select
              value={selectedBaths}
              onChange={(e) => setSelectedBaths(Number(e.target.value))}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value={0}>Baths ▼</option>
              {FILTER_OPTIONS.bathOptions.map((bath) => (
                <option key={bath} value={bath}>
                  {bath === 0 ? "Any" : `${bath}+ bath${bath > 1 ? "s" : ""}`}
                </option>
              ))}
            </select>

            {/* Clear Filters Button */}
            {activeFiltersCount > 0 && (
              <button
                onClick={() => {
                  setSelectedPropertyType("All Properties");
                  setSelectedLocation("All Locations");
                  setSelectedPriceRange(0);
                  setSelectedBeds(0);
                  setSelectedBaths(0);
                }}
                className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 transition flex items-center gap-1"
              >
                Clear All ({activeFiltersCount}) ✕
              </button>
            )}

            <div className="flex-1"></div>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg border-0 focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              {FILTER_OPTIONS.sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  Sort by: {option.label} ▼
                </option>
              ))}
            </select>

            {/* View Toggle Buttons */}
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode(VIEW_MODES.GRID)}
                className={`p-2 rounded-lg transition ${
                  viewMode === VIEW_MODES.GRID
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="Grid view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode(VIEW_MODES.LIST)}
                className={`p-2 rounded-lg transition ${
                  viewMode === VIEW_MODES.LIST
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
                aria-label="List view"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Properties Grid/List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {sortedProperties.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No properties found matching your criteria.</p>
          </div>
        ) : (
          <>
            <div
              className={
                viewMode === VIEW_MODES.GRID
                  ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                  : "flex flex-col gap-4"
              }
            >
              {sortedProperties.map((property) => (
                <ListPropertyCard key={property.id} property={property} viewMode={viewMode} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 text-center">
              <p className="text-gray-600 text-sm">
                {sortedProperties.length > 0 
                  ? `1 - ${Math.min(PAGINATION.ITEMS_PER_PAGE, sortedProperties.length)} of ${sortedProperties.length} properties` 
                  : "No properties found"}
              </p>
              {sortedProperties.length > PAGINATION.ITEMS_PER_PAGE && (
                <div className="flex justify-center gap-2 mt-4">
                  <button className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-3 py-1 text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    1
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-3 py-1 text-sm text-gray-600 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                    Next
                  </button>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;