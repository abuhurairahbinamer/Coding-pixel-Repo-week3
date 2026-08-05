// src/context/FilterContext.tsx
import { createContext, useContext, useState } from "react";

type Region = "All" | "Africa" | "Americas" | "Asia" | "Europe" | "Oceania";

type FilterContextType = {
  region: Region;
  setRegion: (r: Region) => void;

};

const FilterContext = createContext<FilterContextType | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<Region>("All");
  return (
    <FilterContext.Provider value={{ region, setRegion}}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used inside provider");
  return ctx;
}