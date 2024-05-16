"use client";

import PetCard from "@/components/pet-card";
import { Separator } from "@/components/ui/separator";
import { useMyPets } from "./hooks/use.my-pets";
import { SkeletonCard } from "@/components/skeleton-card";

export default function MyPetsProfilePage() {
  const { data: myPets, error, isLoading } = useMyPets();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">My pets</h3>
        <p className="text-sm text-muted-foreground">
          List of all your registered pets.
        </p>
      </div>
      <Separator />
      <div className="grid grid-cols-3 gap-2">
        {isLoading ? (
          <SkeletonCard />
        ) : (
          <>
            {myPets.map((pet: any) => (
              <PetCard simplified key={pet.id} pet={pet} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}
