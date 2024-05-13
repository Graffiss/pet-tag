import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useMissingPets() {
  return useQuery({
    queryKey: ["missingPets"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pet/missing`
      );
      return data.data;
    },
  });
}
