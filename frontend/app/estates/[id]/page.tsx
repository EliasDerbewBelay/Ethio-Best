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
      <div className="bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link 
            href="/estates" 
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 font-medium transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Listings</span>
          </Link>
          <div className="hidden sm:flex items-center gap-4">
             <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider">
               {property.featured ? "FEATURED" : property.type.toUpperCase()}
             </span>
             <span className="text-2xl font-bold text-blue-600">{formatPrice(property.price)}<span className="text-sm text-gray-400 font-normal">/{property.priceType}</span></span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details & Gallery */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title & Location Header */}
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">
                {property.title}
              </h1>
              <div className="flex items-center gap-2 text-gray-500 text-lg">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>{property.location}</span>
              </div>
            </div>

            {/* Image Gallery */}
            <PropertyGallery images={property.images} />

            {/* Vital Stats Card */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white rounded-3xl shadow-sm border border-gray-100">
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50/50">
                <Bed className="w-6 h-6 text-blue-600" />
                <span className="text-gray-900 font-bold">{property.beds}</span>
                <span className="text-xs text-gray-500 uppercase font-semibold">Bedrooms</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50/50">
                <Bath className="w-6 h-6 text-blue-600" />
                <span className="text-gray-900 font-bold">{property.baths}</span>
                <span className="text-xs text-gray-500 uppercase font-semibold">Bathrooms</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50/50">
                <Maximize className="w-6 h-6 text-blue-600" />
                <span className="text-gray-900 font-bold">{property.sqft}</span>
                <span className="text-xs text-gray-500 uppercase font-semibold">Sq Ft</span>
              </div>
              <div className="flex flex-col items-center gap-2 p-3 rounded-2xl bg-blue-50/50">
                <Car className="w-6 h-6 text-blue-600" />
                <span className="text-gray-900 font-bold">{property.parking}</span>
                <span className="text-xs text-gray-500 uppercase font-semibold">Parking</span>
              </div>
            </div>

            {/* Description Section */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-50">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg whitespace-pre-line">
                {property.description}
              </p>
            </section>

            {/* Amenities Section */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-50">
                Amenities & Features
              </h2>
              <AmenitiesList amenities={property.amenities} />
            </section>

            {/* Key Details Section */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-50">
                Property Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="flex justify-between items-center py-3 border-b border-gray-50">
                    <span className="text-gray-500 font-medium flex items-center gap-2"><Maximize className="w-4 h-4" /> Size</span>
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
            <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 space-y-4 ring-2 ring-blue-50">
               <div className="p-3 bg-blue-100/50 rounded-2xl text-center">
                  <span className="text-blue-700 font-bold text-sm tracking-wide">EXPERIENCE IT NOW</span>
               </div>
               <h3 className="text-2xl font-bold text-gray-900 text-center">
                  Take a Virtual Journey
               </h3>
               <p className="text-gray-500 text-center text-sm leading-relaxed px-2">
                  Explore every corner of this property from the comfort of your home. High-definition 360° tour.
               </p>
               <VirtualTourButton url={property.virtualTourUrl} />
            </div>

            {/* Agent Contact Card */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6 sticky top-24">
               <h3 className="text-xl font-bold text-gray-900">
                  Listed by Agent
               </h3>
               
               <div className="flex items-center gap-4 pb-6 border-b border-gray-50">
                  <div className="relative w-16 h-16 rounded-2xl overflow-hidden shadow-md">
                     <Image 
                        src={property.agent.image} 
                        alt={property.agent.name}
                        fill
                        className="object-cover"
                     />
                  </div>
                  <div>
                     <h4 className="font-bold text-gray-900 text-lg">{property.agent.name}</h4>
                     <p className="text-blue-600 text-xs font-bold tracking-widest uppercase">Senior Advisor</p>
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
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-100 flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5 active:translate-y-0">
                     <MessageSquare className="w-5 h-5" />
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