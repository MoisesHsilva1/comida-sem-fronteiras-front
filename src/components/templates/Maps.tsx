import { useEffect, useRef, useState } from "react";
import {
  type MapsFormSchema,
  mapsSearchSchema,
} from "@/schemas/mapsFormSchema";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useOngFetch, useOngFetchByDistance } from "@/hooks/useOng";

import { Input } from "../ui/input";
import { OngCard } from "../molecules/OngCard";
import { Button } from "../ui/button";
import { motion, AnimatePresence } from "framer-motion";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Environment from "@/config/env";

function Maps() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedOng, setSelectedOng] = useState<
    import("@/types/interfaces/ongResponse").OngResponse | null
  >(null);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const {
    control,
    formState: { errors },
    watch,
    trigger,
  } = useForm<MapsFormSchema>({
    resolver: zodResolver(mapsSearchSchema),
    defaultValues: { search: "" },
  });
  const searchValue = watch("search");

  const { data: ongs } = useOngFetch(true, {
    limit: 30,
    offset: 0,
    query: searchValue,
  });

  useEffect(() => {
    if (!userLocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ lat: latitude, lon: longitude });
      });
    }
    return () => {};
  }, [userLocation]);

  const { data: ongsNearby } = useOngFetchByDistance(
    userLocation?.lat ?? 0,
    userLocation?.lon ?? 0,
    !!userLocation
  );

  useEffect(() => {
    mapboxgl.accessToken = Environment.VITE_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/dark-v10",
      center: userLocation
        ? [userLocation.lon, userLocation.lat]
        : [-46.64102, -23.55445],
      zoom: 12.9,
    });
    return () => {
      mapRef.current?.remove();
    };
  }, [userLocation]);

  useEffect(() => {
    if (!mapRef.current) return;
    const markers: mapboxgl.Marker[] = [];
    let ongsToShow: import("@/types/interfaces/ongResponse").OngResponse[] = [];

    if (searchValue && ongsNearby) {
      ongsToShow = ongsNearby;
    } else if (ongs?.rows) {
      ongsToShow = ongs.rows;
    }
    ongsToShow.forEach((ong) => {
      const { lon, lat } = ong.coordinates;

      const marker = new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(mapRef.current!);
      marker.getElement().addEventListener("click", () => {
        setSelectedOng(ong);
        setSidebarOpen(true);
      });
      markers.push(marker);
    });

    return () => {
      markers.forEach((marker) => marker.remove());
    };
  }, [ongs, ongsNearby, searchValue]);

  const sidebarVariants = {
    open: {
      x: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
    closed: {
      x: "100%",
      transition: { type: "spring" as const, stiffness: 300, damping: 30 },
    },
  };

  return (
    <div className="relative w-full h-screen bg-black text-white flex overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full z-0"
        ref={mapContainerRef}
      />
      <AnimatePresence>
        {sidebarOpen && (
          <motion.aside
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            className="fixed right-0 top-0 h-full w-full sm:w-[400px] max-w-full z-20 bg-neutral-900 shadow-2xl border-l border-neutral-800 flex flex-col px-6 py-8 gap-8 sm:rounded-l-3xl sm:shadow-2xl sm:gap-8 overflow-y-auto"
            style={{
              boxShadow: "-8px 0 32px 0 rgba(0,0,0,0.45)",
            }}
          >
            <div className="flex items-center justify-between mb-6">
              <span className="text-2xl font-bold tracking-tight text-white">
                ONG Selecionada
              </span>
              <button
                aria-label="Fechar sidebar"
                className="rounded-full p-2 bg-neutral-800 hover:bg-neutral-700 transition-colors"
                onClick={() => setSidebarOpen(false)}
              >
                <svg
                  width="24"
                  height="24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Controller
              name="search"
              control={control}
              render={({ field }) => (
                <Input
                  {...field}
                  placeholder="Buscar ONGs próximas"
                  className="w-full bg-neutral-800 text-white placeholder-neutral-500 border border-neutral-700 rounded-xl px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onChange={field.onChange}
                  value={field.value}
                  onKeyDown={async (e) => {
                    if (e.key === "Enter") {
                      await trigger("search");
                    }
                  }}
                />
              )}
            />
            {errors.search && (
              <span className="text-red-500 mt-2 text-sm">
                {errors.search.message}
              </span>
            )}
            {selectedOng && (
              <div className="flex flex-col gap-6">
                <OngCard
                  title={selectedOng?.name}
                  address={selectedOng?.address}
                  description={selectedOng?.description}
                />
              </div>
            )}
            {!selectedOng && (
              <>
                {ongs?.rows.slice(0, 3).map((ong) => (
                  <OngCard
                    key={ong.id}
                    title={ong.name}
                    address={ong.address}
                    description={ong.description}
                  />
                ))}
              </>
            )}
            <Button
              onClick={() => setSidebarOpen(false)}
              className="bg-[#FF9F0D] hover:bg-yellow-600 text-white rounded-full shadow-lg px-5 py-3 font-semibold text-base transition-all"
            >
              fechar
            </Button>
          </motion.aside>
        )}
      </AnimatePresence>
      {!sidebarOpen && (
        <button
          className="fixed right-4 bottom-6 sm:top-6 sm:right-6 z-20 bg-[#FF9F0D] hover:bg-yellow-600 text-white rounded-full shadow-lg px-5 py-3 font-semibold text-base transition-all"
          onClick={() => setSidebarOpen(true)}
          aria-label="Abrir informações da ONG"
        >
          Ver ONG
        </button>
      )}
    </div>
  );
}

export default Maps;
