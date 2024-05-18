import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function usePetProfile(id: string) {
  return useQuery({
    queryKey: ["petProfile"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pet/${id}`
      );
      return data.data;
    },
  });
}
