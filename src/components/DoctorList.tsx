"use client";

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

interface DoctorListProps {
  doctors: Doctor[];
  specializations: Specialization[];
}

export const DoctorList = ({ doctors, specializations }: DoctorListProps) => {
  return (
    <div className="space-y-4">
      {doctors.length === 0 ? (
        <p className="text-center text-2xl">No Doctors Found.</p>
      ) : (
        doctors.map((doctor) => {
          const specialization =
            specializations.find(
              (specialization) => specialization.id === doctor.specializationId
            )?.name || "N/A";

          return (
            <div key={doctor.id} className="p-4 border rounded shadow-sm">
              <p>Doctor Name: {doctor.name}</p>
              <p>Hospital: {doctor.hospitals.name}</p>
              <p>Address: {doctor.hospitals.address}</p>
              <p>Specialization: {specialization}</p>
            </div>
          );
        })
      )}
    </div>
  );
};
