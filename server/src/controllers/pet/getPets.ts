import prisma from "../../db";

export const getPets = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      pets: true,
    },
  });

  res.json({ data: user.pets });
};
