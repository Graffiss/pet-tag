import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useEditPet(id: string) {
  return useQuery({
    queryKey: ["editPet"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/api/pet/${id}`
      );
      return data.data;
    },
  });
}
