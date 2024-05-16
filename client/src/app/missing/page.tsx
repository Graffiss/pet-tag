"use client";

import PetCard from "@/components/pet-card";
import { useMissingPets } from "./hooks/use.missing-pets";
import { SkeletonCard } from "@/components/skeleton-card";

const MissingPage = () => {
  const { data: missingPets, error, isLoading } = useMissingPets();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="my-6">
      <div className="flex flex-col">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-2">
          Currently missing pets
        </h1>
      </div>
      <div className="grid grid-cols-3">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <>
            {missingPets.map((pet: any) => (
              <PetCard key={pet.id} pet={pet} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default MissingPage;
