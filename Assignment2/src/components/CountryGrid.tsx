// src/components/CountryGrid.tsx
import { useFilter } from "../context/FilterContext";
import type { Country } from "../types/country";
import CountryCard from "./CountryCard";

type Props = {
  countries: Country[];
  search: string;
};

export default function CountryGrid({ countries, search }: Props) {
  const { region } = useFilter();

  //  compute BEFORE return
  const filtered = countries.filter((c) => {
    const matchesName = c.name.common.toLowerCase().includes(search.toLowerCase());
    const matchesRegion = region === "All" || c.region === region;
    return matchesName && matchesRegion;
  });

  if (filtered.length === 0) {
    return <p className="text-center mt-5">No countries found</p>;
  }

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
    </div>
  );
}