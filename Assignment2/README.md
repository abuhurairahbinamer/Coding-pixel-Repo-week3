# 🌍 Country Explorer (Assignment 2)

A data-driven, responsive web application built for **CMIT Internship Program (Week 3 - Assignment 2)**. The application fetches live data about countries around the world from the REST Countries API, allowing users to search countries by name and filter them by region using React Context.

---

## ✨ Features

- **Custom Hook Data Fetching**: Encapsulated API fetching logic inside `useCountries()` with `loading`, `error`, and `data` states.
- **Request Cleanup**: Utilizes `AbortController` in `useEffect` to safely abort pending requests on component unmount and prevent memory leaks/infinite re-renders.
- **Global Region State via React Context**: Region filter selection (`All`, `Africa`, `Americas`, `Asia`, `Europe`, `Oceania`) is managed using `FilterContext` to avoid prop-drilling.
- **Client-Side Name Filtering**: Case-insensitive substring search by country name.
- **4 Distinct UI States**:
  1. **Loading State**: Displayed while fetching API data.
  2. **Error State**: Friendly error message if network or fetch fails.
  3. **Empty State**: Clear indicator when search or region filter returns zero results.
  4. **Results State**: Rendered grid of country cards.
- **Clean Component Architecture**: All business logic and data formatting (such as `toLocaleString()` for population and capital fallback) are computed before component return statements.
- **Responsive Design**: Built with Tailwind CSS, adapting smoothly from 1 column on mobile screens to 4 columns on desktop displays (`grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`).

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── CountryCard.tsx    # Renders individual country info (flag, name, capital, population, region)
│   ├── CountryGrid.tsx    # Applies filters and renders the responsive card grid or empty state
│   ├── RegionFilter.tsx   # Region selection dropdown connected to FilterContext
│   └── SearchBar.tsx      # Controlled input for name search
├── context/
│   └── FilterContext.tsx  # React Context for sharing region filter state globally
├── hooks/
│   └── useCountries.ts    # Custom hook handling API fetch, loading, error, & AbortController
├── types/
│   └── country.ts         # TypeScript interface for Country data
├── App.tsx                # Main layout managing search state and rendering UI states
└── main.tsx               # App entry point wrapping components with FilterProvider
```

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Build for Production
```bash
npm run build
```

---

## 📡 API Endpoint Used
`https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3`

