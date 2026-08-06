// src/components/CountryGrid.tsx
import { useFilter } from "../context/FilterContext";
import type { Country } from "../types/country";
import CountryCard from "./CountryCard";
import {applyFilters} from '../../Practice/p7'
type Props = {
  countries: Country[];
  search: string;
  state:string;
};

export default function CountryGrid({ countries, search ,state}: Props) {
  const { region } = useFilter();

  //  compute BEFORE return
  const filtered = applyFilters(countries,{search,region})
  
  if (state==='empty') {
    return <p className="text-center mt-5">No countries found</p>;
  }
if(state==="results"){
  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filtered.map((c) => (
        <CountryCard key={c.cca3} country={c} />
      ))}
    </div>
  );
}
}