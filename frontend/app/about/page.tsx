import PropertyCard from "@/components/cardModels/PropertyCard";

const properties = [
  {
    id: 1,
    title: "Equestrian Family Home",
    location: "California City, CA, USA",
    price: 14000,
    beds: 3,
    baths: 4,
    sqft: 1200,
    isFeatured: true,
    status: "For Rent",
    image: "/house-1.jpg", // Put your images in the /public folder
  },
];

export default function Home() {
  return (
    <main className="p-12 bg-slate-50 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((home) => (
          <PropertyCard key={home.id} property={home} />
        ))}
      </div>
    </main>
  );
}
