// src/components/RegionFilter.tsx
import { useFilter } from "../context/FilterContext";

const regions = ["All", "Africa", "Americas", "Asia", "Europe", "Oceania"] as const;
type Region = typeof regions[number];
export default function RegionFilter() {
  const { region, setRegion } = useFilter();

  const handleRegionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRegion(e.target.value as Region);
  };

  return (
    <select
      value={region}
      onChange={handleRegionChange}
      className="p-2 border rounded"
    >
      {regions.map((r) => (
        <option key={r}>{r}</option>
      ))}
    </select>
  );
}