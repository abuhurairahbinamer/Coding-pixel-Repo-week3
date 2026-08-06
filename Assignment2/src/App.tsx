// src/App.tsx
import { useState } from "react";
import { useCountries } from "./hooks/useCountries";
import SearchBar from "./components/SearchBar";
import RegionFilter from "./components/RegionFilter";
import CountryGrid from "./components/CountryGrid";
import '../Practice/P2';
import {deriveState} from '../Practice/P4';

export default function App() {
  const { data, loading, error } = useCountries();
  const [search, setSearch] = useState("");
  const result=deriveState({data,loading,error,search});
  if(result==='loading'){
    return(
 <div className="flex flex-col items-center mt-10 gap-3">
  <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  <p className="text-gray-600">Loading countries...</p>
</div>
)
  }
 if(result==="error") {return <p className="text-center mt-10 text-red-500">{error}</p>;}

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row justify-between mb-4 gap-3">
        <SearchBar value={search} onChange={setSearch} />
        <RegionFilter />
      </div>

      <CountryGrid state={result} countries={data} search={search} />
    </div>
  );
}