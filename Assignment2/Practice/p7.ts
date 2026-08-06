import type { Country } from "../src/types/country";
type FilterOption={
    search:string;
    region:string;
}

export const applyFilters=(countries:Country[], { search, region }:FilterOption)=>{
  return countries
    .filter(c => region === "All" || c.region === region)
    .filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()));
}
//Deeper
// The order of filters doesn’t change the final result, but it can affect Performance. It really depends on which filter removes more items. If you apply the stricter filter first, it reduces the number of elements early, so the next filter has less work to do, making the overall process faster.So it depends upon situation.In either case the performance can increase

//  Case 1: Region → Name
// Start with 250 countries
// Region filter → reduces to 50
// Name filter → runs on 50

//  Total checks:
// Region: 250
// Name: 50
//  Total = 300 iterations



//  Case 2: Name → Region
// Start with 250 countries
// Name filter → runs on 250
// Suppose it returns 5 matches
// Region filter → runs on 5

//  Total checks:

// Name: 250
// Region: 5
// Total = 255 iterations
// here case 2 is more effective