import { PetProfile } from "@/components/forms/pet-profile.form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export function useCreatePet() {
  const session = useSession();

  // @ts-ignore-next-line
  const token = session.data?.user?.accessToken;

  return useMutation({
    mutationFn: async (payload: PetProfile) => {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pet`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.data;
    },
  });
}
