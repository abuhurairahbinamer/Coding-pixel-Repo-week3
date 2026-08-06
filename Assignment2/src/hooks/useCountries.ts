// src/hooks/useCountries.ts
import { useEffect, useState } from "react";
import type { Country } from "../types/country";

export function useCountries(): {
  data: Country[];
  loading: boolean;
  error: string | null;
} {
  const [data, setData] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchCountries() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://restcountries.conventus.de/v3.1/all?fields=name,capital,population,region,flags,cca3",
          { signal: controller.signal }
        );

        if (!res.ok) throw new Error("Failed to fetch");

        const json = await res.json();
        setData(json);
      } catch (err: unknown) {
       if (err instanceof Error && err.name !== "AbortError") 
        { setError(err.message); }
      } finally {
        setLoading(false);
      }
    }
// setTimeout(fetchCountries,5000) // for the purpose of seeing loader
    fetchCountries();

    return () => controller.abort(); // cleanup
  }, []);

  return { data, loading, error };
}