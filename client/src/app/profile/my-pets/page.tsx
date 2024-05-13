import PetCard from "@/components/pet-card";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { useMyPets } from "./hooks/use.my-pets";

export default function MyPetsProfilePage() {
  const { data: myPets, error, isLoading } = useMyPets();

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(myPets);

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
        {myPets.map((pet: any) => (
          <PetCard simplified key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
}
