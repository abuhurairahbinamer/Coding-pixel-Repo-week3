// src/components/SearchBar.tsx
type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type="text"
      value={value}
      placeholder="Search country..."
      onChange={handleInputChange}
      className="w-full md:w-1/3 p-2 border rounded"
    />
  );
}