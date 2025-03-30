"use client";

interface FiltersProps {
  specializations: { id: number; name: string }[];
  cities: { id: string; name: string }[];
  areas: { id: string; name: string }[];
  selectedSpecialization: number | null;
  selectedCity: string | null;
  selectedArea: string | null;
  setSelectedSpecialization: (value: number | null) => void;
  setSelectedCity: (value: string | null) => void;
  setSelectedArea: (value: string | null) => void;
}

export const Filters = ({
  specializations,
  cities,
  areas,
  selectedSpecialization,
  selectedCity,
  selectedArea,
  setSelectedSpecialization,
  setSelectedCity,
  setSelectedArea,
}: FiltersProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <select
        className="p-2 border rounded"
        value={selectedSpecialization ?? ""}
        onChange={(e) =>
          setSelectedSpecialization(
            e.target.value ? Number(e.target.value) : null
          )
        }
      >
        <option value="" className="bg-black text-white">
          All Specializations
        </option>
        {specializations.map((specialization) => (
          <option
            key={specialization.id}
            value={specialization.id}
            className="bg-black text-white"
          >
            {specialization.name}
          </option>
        ))}
      </select>

      <select
        className="p-2 border rounded"
        value={selectedCity ?? ""}
        onChange={(e) => setSelectedCity(e.target.value || null)}
      >
        <option value="" className="bg-black text-white">
          All Cities
        </option>
        {cities.map((city) => (
          <option key={city.id} value={city.id} className="bg-black text-white">
            {city.name}
          </option>
        ))}
      </select>

      <select
        className="p-2 border rounded"
        value={selectedArea ?? ""}
        onChange={(e) => setSelectedArea(e.target.value || null)}
        disabled={!selectedCity}
      >
        <option value="" className="bg-black text-white">
          All Areas
        </option>
        {areas.map((area) => (
          <option key={area.id} value={area.id} className="bg-black text-white">
            {area.name}
          </option>
        ))}
      </select>
    </div>
  );
};
