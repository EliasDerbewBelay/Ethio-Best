import { PROPERTIES } from "@/constants/property";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { 
  Bed, 
  Bath, 
  Maximize, 
  Calendar, 
  Car, 
  MapPin, 
  Phone, 
  Mail, 
  MessageSquare,
  ArrowLeft
} from "lucide-react";
import PropertyGallery from "@/components/property/PropertyGallery";
import AmenitiesList from "@/components/property/AmenitiesList";
import VirtualTourButton from "@/components/property/VirtualTourButton";
import Location from "@/components/cardModels/Location";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { id } = await params;
  const propertyId = parseInt(id);
  const property = PROPERTIES.find((p) => p.id === propertyId);

  if (!property) {
    notFound();
  }

  // Format currency
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-ET", {
      style: "currency",
      currency: "ETB",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navigation Header */}
      <div className="bg-white border-b border-gray-100 sticky-below-header shadow-sm">
        <div className="section-container min-h-14 sm:min-h-16 flex items-center justify-between gap-3">
          <Link 
            href="/estates" 
            className="flex items-center gap-1.5 sm:gap-2 text-gray-600 hover:text-purple-700 font-medium transition-colors text-sm sm:text-base shrink-0"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="hidden xs:inline">Back to Listings</span>
            <span className="xs:hidden">Back</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4 min-w-0">
             <span className="bg-purple-700 text-white px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold tracking-wider shrink-0">
               {property.featured ? "FEATURED" : property.type.toUpperCase()}
             </span>
             <span className="text-base sm:text-xl md:text-2xl font-bold text-purple-700 truncate">
               {formatPrice(property.price)}
               <span className="text-xs sm:text-sm text-gray-400 font-normal">/{property.priceType}</span>
             </span>
          </div>
        </div>
      </div>

      <div className="section-container page-content">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details & Gallery */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location Header */}
            <div>
              <h1 className="text-h1 text-gray-900 mb-2">
                {property.title}
              </h1>
              <div className="flex items-start sm:items-center gap-2 text-gray-500 text-sm sm:text-base md:text-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Image Gallery */}
            <PropertyGallery images={property.images} />

            {/* Vital Stats Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 p-3.5 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
              {[
                { icon: Bed, val: property.beds, label: "Beds" },
                { icon: Bath, val: property.baths, label: "Baths" },
                { icon: Maximize, val: property.sqft, label: "Sq Ft" },
                { icon: Car, val: property.parking, label: "Parking" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center gap-1 sm:gap-1.5 p-2 sm:p-3 rounded-xl bg-purple-50/60">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  <span className="text-body-sm font-bold text-gray-900">{stat.val}</span>
                  <span className="text-caption text-gray-500 uppercase">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Description Section */}
            <section className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-h3 text-gray-900 mb-3 sm:mb-4 pb-2 border-b border-gray-50">Description</h2>
              <p className="text-body-sm text-gray-600 whitespace-pre-line">
                {property.description}
              </p>
            </section>

            {/* Amenities Section */}
            <section className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-h3 text-gray-900 mb-4 sm:mb-5 pb-2 border-b border-gray-50">Amenities & Features</h2>
              <AmenitiesList amenities={property.amenities} />
            </section>

            {/* Key Details Section */}
            <section className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-h3 text-gray-900 mb-4 sm:mb-5 pb-2 border-b border-gray-50">Property Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                 <div className="flex justify-between items-center py-2.5 sm:py-3 border-b border-gray-50 text-body-sm">
                    <span className="text-gray-500 flex items-center gap-1.5"><Maximize className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> Size</span>
                    <span className="text-gray-900 font-bold">{property.sqft} sqft</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-500 font-medium flex items-center gap-2"><Calendar className="w-4 h-4" /> Year Built</span>
                    <span className="text-gray-900 font-bold">{property.yearBuilt}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-500 font-medium flex items-center gap-2"><Bed className="w-4 h-4" /> Bedrooms</span>
                    <span className="text-gray-900 font-bold">{property.beds}</span>
                 </div>
                 <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-500 font-medium flex items-center gap-2"><Bath className="w-4 h-4" /> Bathrooms</span>
                    <span className="text-gray-900 font-bold">{property.baths}</span>
                 </div>
              </div>
            </section>

            {/* Map Section */}
            <section className="bg-white p-4 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
               <Location />
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* CTA Card: Virtual Tour */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 space-y-3 sm:space-y-4 ring-1 ring-purple-50">
               <div className="p-2 sm:p-2.5 bg-purple-100/50 rounded-xl text-center">
                  <span className="text-purple-700 font-bold text-caption tracking-wide">EXPERIENCE IT NOW</span>
               </div>
               <h3 className="text-h3 text-gray-900 text-center">Take a Virtual Journey</h3>
               <p className="text-caption sm:text-body-sm text-gray-500 text-center px-1">
                  Explore every corner of this property from the comfort of your home. High-definition 360° tour.
               </p>
               <VirtualTourButton url={property.virtualTourUrl} />
            </div>

            {/* Agent Contact Card */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 space-y-4 sm:space-y-5 lg:sticky lg:top-[calc(var(--header-height)+1rem)]">
               <h3 className="text-h3 text-gray-900">Listed by Agent</h3>
               
               <div className="flex items-center gap-3 pb-4 sm:pb-5 border-b border-gray-50">
                  <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl overflow-hidden shadow-md shrink-0">
                     <Image 
                        src={property.agent.image} 
                        alt={property.agent.name}
                        fill
                        className="object-cover"
                     />
                  </div>
                  <div>
                     <h4 className="text-body-sm font-bold text-gray-900">{property.agent.name}</h4>
                     <p className="text-caption text-purple-600 font-bold tracking-widest uppercase">Senior Advisor</p>
                  </div>
               </div>

               <div className="space-y-4">
                  <a href={`tel:${property.agent.phone}`} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-all text-gray-700 font-medium group text-sm">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                        <Phone className="w-4 h-4 text-blue-600" />
                     </div>
                     {property.agent.phone}
                  </a>
                  <a href={`mailto:${property.agent.email}`} className="flex items-center gap-3 p-3 rounded-xl border border-gray-100 hover:bg-blue-50 hover:border-blue-100 transition-all text-gray-700 font-medium group text-sm">
                     <div className="p-2 bg-gray-50 rounded-lg group-hover:bg-white transition-colors">
                        <Mail className="w-4 h-4 text-blue-600" />
                     </div>
                     {property.agent.email}
                  </a>
               </div>

               {/* Inquiry Form */}
               <form className="space-y-3 pt-4">
                  <input 
                     type="text" 
                     placeholder="Your Name" 
                     className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                  />
                  <input 
                     type="email" 
                     placeholder="Email Address" 
                     className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 transition-all text-sm"
                  />
                  <textarea 
                     rows={3} 
                     placeholder="Message..." 
                     className="w-full px-4 py-3 rounded-xl bg-gray-50 border-none ring-1 ring-gray-200 focus:ring-2 focus:ring-blue-600 transition-all text-sm resize-none"
                     defaultValue={`I am interested in ${property.title}. Please contact me.`}
                  ></textarea>
                  <button className="btn-primary w-full bg-purple-700 hover:bg-purple-800 text-white rounded-xl shadow-lg">
                     <MessageSquare className="w-4 h-4" />
                     Send Inquiry
                  </button>
               </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};