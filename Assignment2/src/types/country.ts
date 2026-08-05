// src/types/country.ts
export type Country = {
  name: { common: string };
  capital?: string[];
  population: number;
  region: string;
  flags: { png: string; alt?: string };
  cca3: string;
};