import prisma from "../../db";

export const getPetsMissing = async (_, res) => {
  const missingPets = await prisma.pet.findMany({
    where: {
      missing: "MISSING",
    },
  });

  res.json({ data: missingPets });
};
