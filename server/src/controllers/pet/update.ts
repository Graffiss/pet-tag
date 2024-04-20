import prisma from "../../db";

export const updatePet = async (req, res) => {
  const updated = await prisma.pet.update({
    where: {
      id_belongsToId: {
        id: req.params.id,
        belongsToId: req.user.id,
      },
    },
    data: {
      name: req.body.name,
      birthdate: req.body.birthdate,
      breed: req.body.breed,
      type: req.body.type,
      color: req.body.color,
      primaryPhone: req.body.primaryPhone,
      secondaryPhone: req.body.secondaryPhone,
      address: req.body.address,
      vetName: req.body.vetName,
      missing: req.body.missing,
    },
  });

  res.status(200).json({ message: `${updated.name} profile has been updated` });
};
