"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useParams } from "next/navigation";
import { usePetProfile } from "./hooks/use.pet-profile";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

const PetProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = usePetProfile(id);

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col items-center space-x-4 rounded-md border p-4">
      <Image
        src="/default-dog.png"
        width={296}
        height={296}
        alt="Missing dog profile picture"
        className="rounded-full border-4 border-orange-600"
      />
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-2">
        {data.name}
      </h1>
      <Separator className="bg-orange-500" />
      <p>{data.breed}</p>
      <p>{data.color}</p>
      <p>{data.primaryPhone}</p>
      <p>{data.secondaryPhone}</p>
      <p>{data.vetName}</p>
      <p>{data.birthdate}</p>
      <p>{data.type}</p>
      <p>{data.missing}</p>
    </div>
  );
};

export default PetProfile;
