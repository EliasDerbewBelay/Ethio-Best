import Image from "next/image";

type PropertyCardProps = {
  image: string;
  price: string;
  alt: string;
};

export default function HeroSecPptCard({
  image,
  price,
  alt,
}: PropertyCardProps) {
  return (
    <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-md border border-white/20">
      <div className="relative h-[220px] w-full">
        <Image src={image} alt={alt} fill className="object-cover" priority />
      </div>

      {/* Price Badge */}
      <div className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full shadow">
        {price}
      </div>
    </div>
  );
}
