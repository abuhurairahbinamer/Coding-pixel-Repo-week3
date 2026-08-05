export function formatPopulation(n?: number): string {
//deeper
  if (!n) return "0";
  return n.toLocaleString();
}
console.log("P2 task done with deeper : ",formatPopulation(1380004385));
console.log("P2 task done with deeper : ",formatPopulation(0));