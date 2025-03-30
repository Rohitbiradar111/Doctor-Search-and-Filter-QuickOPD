"use client";

import { useState, useEffect } from "react";
import { SearchBar } from "@/components/SearchBar";
import { Filters } from "@/components/Filters";
import { DoctorList } from "@/components/DoctorList";
import {
  fetchDoctors,
  fetchSpecializations,
  fetchCities,
  fetchAreas,
} from "@/services/api";

interface Doctor {
  id: string;
  name: string;
  hospitals: {
    name: string;
    address: string;
    areasId: string;
  };
  specializationId: number;
}

interface Specialization {
  id: number;
  name: string;
}

interface City {
  id: string;
  name: string;
}

interface Area {
  id: string;
  name: string;
  citiesId: string;
}

export default function Home() {
  const [doctorsList, setDoctorsList] = useState<Doctor[]>([]);
  const [specialization, setSpecialization] = useState<Specialization[]>([]);
  const [citiesList, setCitiesList] = useState<City[]>([]);
  const [areasList, setAreasList] = useState<Area[]>([]);
  const [searchInput, setSearchInput] = useState("");
  const [chosenSpecialization, setchosenSpecialization] = useState<
    number | null
  >(null);
  const [chosenCity, setChosenCity] = useState<string | null>(null);
  const [chosenArea, setChosenArea] = useState<string | null>(null);
  const [searchMatches, setSearchMatches] = useState<Doctor[]>([]);

  useEffect(() => {
    async function getAllData() {
      try {
        const getDoctors = await fetchDoctors();
        setDoctorsList(getDoctors);

        const getSpecializations = await fetchSpecializations();
        setSpecialization(getSpecializations);

        const getCities = await fetchCities();
        setCitiesList(getCities);
      } catch (error) {
        console.log("All Data Error : ", error);
      }
    }
    getAllData();
  }, []);

  useEffect(() => {
    async function getAreasData() {
      if (chosenCity) {
        try {
          const getAreas = await fetchAreas(chosenCity);
          setAreasList(getAreas);
          setChosenArea(null);
        } catch (error) {
          console.log("Areas Error : ", error);
        }
      } else {
        setAreasList([]);
      }
    }
    getAreasData();
  }, [chosenCity]);

  useEffect(() => {
    if (searchInput.length > 0) {
      const matchedDoctors = doctorsList.filter((doctor) => {
        const doctorName = doctor.name.toLowerCase();
        const searchText = searchInput.toLowerCase();
        return doctorName.includes(searchText);
      });
      setSearchMatches(matchedDoctors);
    } else {
      setSearchMatches([]);
    }
  }, [searchInput, doctorsList]);

  const filteredDoctorsList = doctorsList.filter((doctor) => {
    const nameMatch = doctor.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const hospitalMatch = doctor.hospitals.name
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const addressMatch = doctor.hospitals.address
      .toLowerCase()
      .includes(searchInput.toLowerCase());
    const matchesSearch = nameMatch || hospitalMatch || addressMatch;

    let matchesSpecialization = true;
    if (chosenSpecialization) {
      if (doctor.specializationId === chosenSpecialization) {
        matchesSpecialization = true;
      } else {
        matchesSpecialization = false;
      }
    }

    let matchesCity = true;
    if (chosenCity) {
      matchesCity = false;
      for (let i = 0; i < areasList.length; i++) {
        const area = areasList[i];
        if (
          area.id === doctor.hospitals.areasId &&
          area.citiesId === chosenCity
        ) {
          matchesCity = true;
          break;
        }
      }
    }

    let matchesArea = true;
    if (chosenArea) {
      if (doctor.hospitals.areasId === chosenArea) {
        matchesArea = true;
      } else {
        matchesArea = false;
      }
    }

    return matchesSearch && matchesSpecialization && matchesCity && matchesArea;
  });

  return (
    <div className="m-5 p-4 flex flex-col justify-center items-center">
      <SearchBar
        search={searchInput}
        setSearch={setSearchInput}
        searchResults={searchMatches}
      />

      <Filters
        specializations={specialization}
        cities={citiesList}
        areas={areasList}
        selectedSpecialization={chosenSpecialization}
        selectedCity={chosenCity}
        selectedArea={chosenArea}
        setSelectedSpecialization={setchosenSpecialization}
        setSelectedCity={setChosenCity}
        setSelectedArea={setChosenArea}
      />

      <DoctorList
        doctors={filteredDoctorsList}
        specializations={specialization}
      />
    </div>
  );
}
