import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const token = "";

export function useMyPets() {
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
