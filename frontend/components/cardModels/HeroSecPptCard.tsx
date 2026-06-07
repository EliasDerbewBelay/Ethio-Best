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
    <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-white/70 backdrop-blur-md border border-white/20">
      <div className="relative img-card-sm w-full">
        <Image src={image} alt={alt} fill className="object-cover" priority sizes="(max-width:640px) 72vw, 33vw" />
      </div>
      <div className="absolute top-2.5 sm:top-3 left-2.5 sm:left-3 bg-white/90 text-gray-800 text-caption font-semibold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full shadow">
        {price}
      </div>
    </div>
  );
}
