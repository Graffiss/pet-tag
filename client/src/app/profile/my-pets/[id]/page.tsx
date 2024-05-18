"use client";

import { PetProfileForm } from "@/components/forms/pet-profile.form";
import { Spinner } from "@/components/ui/spinner";
import { useParams } from "next/navigation";
import { useEditPet } from "./hooks/use.edit-pet";
import { Separator } from "@/components/ui/separator";

const EditPetProfile = () => {
  const { id } = useParams();

  const { data: pet, error, isLoading } = useEditPet(id as string);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (isLoading) {
    return <Spinner className="mr-2 h-4 w-4 animate-spin" />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Edit {pet.name}&apos;s profile</h3>
        <p className="text-sm text-muted-foreground">
          Update your pet&apos;s profile information.
        </p>
      </div>
      <Separator />
      <PetProfileForm pet={pet} />
    </div>
  );
};

export default EditPetProfile;
