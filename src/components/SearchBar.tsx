"use client";

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
  searchResults: {
    id: string;
    name: string;
    hospitals: {
      name: string;
      address: string;
    };
  }[];
}

export const SearchBar = ({
  search,
  setSearch,
  searchResults,
}: SearchBarProps) => {
  return (
    <div className="relative mb-5 w-96">
      <input
        type="text"
        placeholder="Search Doctors Here..."
        className="w-full p-2 border rounded"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {searchResults.length > 0 && (
        <div className="mb-32">
          <ul className="absolute w-full border rounded">
            {searchResults.map((doctor) => (
              <li
                key={doctor.id}
                className="p-2 cursor-pointer border-b-2 bg-gray-50 text-black hover:bg-amber-500"
              >
                <p>Doctor Name : {doctor.name}</p>
                <p>Hospital Name : {doctor.hospitals.name}</p>
                <p>Address : {doctor.hospitals.address}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
