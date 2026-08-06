// p6 task is already applied in FilterContext.tsx.The purpose of creating a seperate file is just for convenince
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
//Deeper
//When a component is rendered outside the <FilterProvider>, useContext returns the default value passed to createContext (which is null). 
export function useFilter() {
  const ctx = useContext(FilterContext);
  //deeper
  //fail loudly
  if (!ctx) throw new Error("useFilter must be used inside provider");
  return ctx;
}