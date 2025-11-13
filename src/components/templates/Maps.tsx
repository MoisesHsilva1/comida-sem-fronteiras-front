import { useEffect, useRef, useState } from "react";
import {
  type MapsFormSchema,
  mapsSearchSchema,
} from "@/schemas/mapsFormSchema";
import { Card } from "../ui/card";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { OngCard } from "../molecules/OngCard";
import { usePlacesMapsFetch } from "@/hooks/usePlacesMaps";

import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Environment from "@/config/env";

function Maps() {
  const [isModalSearch, setIsModalSearch] = useState(false);
  const [userLocation, setUserLocation] = useState<{
    lat: number;
    lon: number;
  } | null>(null);

  const mapRef = useRef<mapboxgl.Map>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const {
    control,
    formState: { errors },
  } = useForm<MapsFormSchema>({
    resolver: zodResolver(mapsSearchSchema),
    defaultValues: { search: "" },
  });

  useEffect(() => {
    if (!userLocation) {
      getUserLocation();
    }
  }, [userLocation]);

  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lon: longitude });
    });

    return console.error("Error get location user");
  };

  const { data: places } = usePlacesMapsFetch({
    categories: "service.social_facility",
    lon: userLocation?.lon || 0,
    lat: userLocation?.lat || 0,
    distance: 1000,
    limit: 20,
  });

  useEffect(() => {
    mapboxgl.accessToken = Environment.VITE_MAPBOX_TOKEN;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current as HTMLElement,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [-46.64102, -23.55445],
      zoom: 12.9,
    });

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !places) return;

    places.features.forEach((place) => {
      const [lon, lat] = place.geometry.coordinates;

      const marker = new mapboxgl.Marker()
        .setLngLat([lon, lat])
        .addTo(mapRef.current!);

      marker.getElement().addEventListener("click", () => {
        setIsModalSearch(true);
      });
    });
  }, [places]);

  return (
    <div className="relative w-full h-screen">
      <div
        className="absolute inset-0 z-0 w-full h-full"
        ref={mapContainerRef}
      />
      {isModalSearch && (
        <Card className="absolute left-8 top-8 p-6 z-10">
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Buscar localizações"
                className="w-96"
                onChange={field.onChange}
                value={field.value}
              />
            )}
          />
          {errors.search && (
            <span className="text-red-500 mt-2">{errors.search.message}</span>
          )}
          {places?.features.map((place, idx) => (
            <OngCard
              key={idx}
              title={place.properties.name ?? ""}
              address={place.properties.formatted}
              description={""}
            />
          ))}
          {/* <OngCard
            title="ONG Exemplo"
            address="Rua Exemplo, 123 - Cidade, Estado"
            description="Descrição breve da ONG exemplo."
          /> */}
        </Card>
      )}
    </div>
  );
}

export default Maps;
