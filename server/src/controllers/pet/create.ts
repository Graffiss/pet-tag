import prisma from "../../db";

export const createNewPet = async (req, res) => {
  const pet = await prisma.pet.create({
    data: {
      belongsTo: {
        connect: {
          id: req.user.id,
        },
      },
      name: req.body.name,
      birthdate: req.body.birthdate,
      breed: req.body.breed,
      type: req.body.type,
      color: req.body.color,
      primaryPhone: req.body.primaryPhone,
      secondaryPhone: req.body.secondaryPhone,
      address: req.body.address,
      vetName: req.body.vetName,
    },
  });

  res.status(200).json({ message: `${pet.name} profile created successfully` });
};
