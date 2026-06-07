import React from "react";

const Location = () => {
  // Using the specific coordinates for Ella Man Real Estate to ensure the pointer is accurate
  const latitude = 8.995787;
  const longitude = 38.768823;

  // The 'q' parameter in the URL is what creates the "Big Location Pointer" (the Red Pin)
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;

  return (
    <div className="w-full">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">
        <div>
          <h2 className="text-h2 text-gray-900">
            Property Location
          </h2>
          <p className="text-body-sm text-gray-500 mt-1">
            Ella Man Real Estate - Addis Ababa, Ethiopia
          </p>
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="touch-target bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 sm:py-2 rounded-lg font-medium transition-colors shadow-sm text-center w-full sm:w-auto"
        >
          Get Directions
        </a>
      </div>

      {/* Map Container with the Pointer */}
      <div className="relative w-full h-[clamp(14rem,45vw,31.25rem)] rounded-xl sm:rounded-2xl overflow-hidden shadow-xl border border-gray-100 sm:border-2 sm:border-white">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ella Man Real Estate Location Pin"
          className="rounded-2xl"
        ></iframe>
      </div>

      {/* Location Features */}
      <div className="mt-6 sm:mt-8 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <div className="p-3 sm:p-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm">
          <span className="text-label text-blue-600 block mb-0.5 sm:mb-1">Region</span>
          <p className="text-body-sm text-gray-700">Addis Ababa</p>
        </div>
        <div className="p-3 sm:p-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm">
          <span className="text-label text-blue-600 block mb-0.5 sm:mb-1">
            Neighborhood
          </span>
          <p className="text-body-sm text-gray-700">Bole District</p>
        </div>
        <div className="p-3 sm:p-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm">
          <span className="text-label text-blue-600 block mb-0.5 sm:mb-1">
            Accessibility
          </span>
          <p className="text-body-sm text-gray-700">Main Road Access</p>
        </div>
        <div className="p-3 sm:p-4 bg-white border border-gray-100 rounded-xl sm:rounded-2xl shadow-sm">
          <span className="text-label text-blue-600 block mb-0.5 sm:mb-1">Status</span>
          <p className="text-body-sm text-green-600 font-medium">
            Verified Location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
