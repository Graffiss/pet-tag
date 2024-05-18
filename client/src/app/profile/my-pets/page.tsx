"use client";

import PetCard from "@/components/pet-card";
import { Separator } from "@/components/ui/separator";
import { useMyPets } from "./hooks/use.my-pets";
import { SkeletonCard } from "@/components/skeleton-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
              <PetCard
                simplified
                key={pet.id}
                pet={pet}
                footer={
                  <div className="flex space-2 flex-col w-full">
                    <Link href={`/profile/my-pets/${pet.id}`}>
                      <Button className="w-full mb-2" variant="secondary">
                        Edit profile
                      </Button>
                    </Link>
                    <Link href={`/pet/${pet.id}`}>
                      <Button className="w-full">View profile</Button>
                    </Link>
                  </div>
                }
              />
            ))}
            <SkeletonCard
              footer={
                <Link href="/profile/my-pets/new">
                  <Button className="w-full">Add new pet</Button>
                </Link>
              }
            />
          </>
        )}
      </div>
    </div>
  );
}
