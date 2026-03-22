import React from "react";

const Location = () => {
  // Using the specific coordinates for Ethio Best Real Estate to ensure the pointer is accurate
  const latitude = 8.995787;
  const longitude = 38.768823;

  // The 'q' parameter in the URL is what creates the "Big Location Pointer" (the Red Pin)
  const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=es;z=14&output=embed`;

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            Property Location
          </h2>
          <p className="text-gray-500 mt-1 text-lg">
            Ethio Best Real Estate - Addis Ababa, Ethiopia
          </p>
        </div>
        <a
          href={`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors shadow-sm text-center"
        >
          Get Directions
        </a>
      </div>

      {/* Map Container with the Pointer */}
      <div className="relative w-full h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          src={mapUrl}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ethio Best Real Estate Location Pin"
          className="rounded-2xl"
        ></iframe>
      </div>

      {/* Location Features */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <span className="text-blue-600 font-bold block mb-1">Region</span>
          <p className="text-gray-700">Addis Ababa</p>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <span className="text-blue-600 font-bold block mb-1">
            Neighborhood
          </span>
          <p className="text-gray-700">Bole District</p>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <span className="text-blue-600 font-bold block mb-1">
            Accessibility
          </span>
          <p className="text-gray-700">Main Road Access</p>
        </div>
        <div className="p-4 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <span className="text-blue-600 font-bold block mb-1">Status</span>
          <p className="text-gray-700 text-green-600 font-medium">
            Verified Location
          </p>
        </div>
      </div>
    </div>
  );
};

export default Location;
