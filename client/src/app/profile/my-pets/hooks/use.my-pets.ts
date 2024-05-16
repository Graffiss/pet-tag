import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useSession } from "next-auth/react";

export function useMyPets() {
  const session = useSession();

  // @ts-ignore-next-line
  const token = session.data?.user?.accessToken;

  return useQuery({
    queryKey: ["myPets"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pet`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return data.data;
    },
  });
}
