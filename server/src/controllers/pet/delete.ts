import prisma from "../../db";

export const deletePet = async (req, res) => {
  const deleted = await prisma.pet.delete({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
  });

  res.json({ data: deleted });
};
