// src/components/CountryCard.tsx
import type { Country } from "../types/country";

export default function CountryCard({ country }: { country: Country }) {
  const capital = country.capital?.[0] ?? "N/A";
  const formattedPopulation = country.population.toLocaleString();

  return (
    <div className="border rounded shadow p-3">
      <img src={country.flags.png} alt={country.flags.alt} className="w-full h-40 object-cover" />
      <h2 className="font-bold mt-2">{country.name.common}</h2>
      <p>Capital: {capital}</p>
      <p>Population: {formattedPopulation}</p>
      <p>Region: {country.region}</p>
    </div>
  );
}