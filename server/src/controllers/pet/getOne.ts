import prisma from "../../db";

export const getOnePet = async (req, res) => {
  const id = req.params.id;

  const pet = await prisma.pet.findFirst({
    where: {
      id,
    },
  });

  res.json({ data: pet });
};
