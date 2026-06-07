"use client";

import { memo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, Calendar, RotateCcw, Phone } from "lucide-react";
import { useVirtualTour } from "@/hooks/useVirtualTour";
import { BRAND_PHONE } from "@/constants/brand";

function TourEndScreen() {
  const { showEndScreen, property, restartTour, closeTour } = useVirtualTour();

  if (!showEndScreen || !property) return null;

  const formatPrice = (price: number) =>
    new Intl.NumberFormat("en-ET", {
      style: "currency",
      currency: "ETB",
      maximumFractionDigits: 0,
    }).format(price);

  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center bg-purple-950/95 p-4 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="vt-glass w-full max-w-lg rounded-3xl p-6 sm:p-8"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.15, type: "spring", damping: 24 }}
      >
        <div className="mb-5 text-center">
          <span className="text-xs tracking-[0.3em] text-yellow-400 uppercase">
            Tour Complete
          </span>
          <h2
            className="mt-2 text-2xl text-white sm:text-3xl"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            You&apos;ve explored {property.title}
          </h2>
        </div>

        <div className="mb-5 flex gap-4 rounded-2xl bg-white/5 p-3">
          <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
            <Image
              src={property.image}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="min-w-0 flex-1 space-y-1.5">
            <p className="text-lg font-bold text-yellow-400">
              {formatPrice(property.price)}
              <span className="text-xs font-normal text-white/50">
                /{property.priceType}
              </span>
            </p>
            <div className="flex flex-wrap gap-3 text-xs text-white/60">
              <span className="flex items-center gap-1">
                <Bed className="h-3.5 w-3.5" /> {property.beds} beds
              </span>
              <span className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5" /> {property.baths} baths
              </span>
              <span className="flex items-center gap-1">
                <Maximize className="h-3.5 w-3.5" /> {property.sqft} sqft
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2.5 sm:flex-row">
          <Link
            href="/contact"
            onClick={closeTour}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-semibold text-purple-950 transition hover:bg-yellow-300"
          >
            <Calendar className="h-4 w-4" />
            Schedule a Physical Visit
          </Link>
          <a
            href={`tel:${BRAND_PHONE}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            <Phone className="h-4 w-4" />
            Contact Agent
          </a>
        </div>

        <button
          type="button"
          onClick={restartTour}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-sm text-white/60 transition hover:text-white"
        >
          <RotateCcw className="h-4 w-4" />
          Restart Tour
        </button>
      </motion.div>
    </motion.div>
  );
}

export default memo(TourEndScreen);
