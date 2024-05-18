"use client";

import { PetProfileForm } from "@/components/forms/pet-profile.form";
import { Separator } from "@/components/ui/separator";

const CreateNewPetProfile = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium">Create new pet&apos;s profile</h3>
        <p className="text-sm text-muted-foreground">
          Add new member to your family.
        </p>
      </div>
      <Separator />
      <PetProfileForm />
    </div>
  );
};

export default CreateNewPetProfile;
