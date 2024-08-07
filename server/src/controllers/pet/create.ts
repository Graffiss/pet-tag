import prisma from "../../db";

export const createNewPet = async (req, res, next) => {
  try {
    const pet = await prisma.pet.create({
      data: {
        belongsTo: {
          connect: {
            id: req.user.id,
          },
        },
        name: req.body.name,
        birthdate: req.body.birthdate
          ? new Date(req.body.birthdate).toISOString()
          : undefined,
        breed: req.body.breed,
        type: req.body.petType,
        color: req.body.color,
        primaryPhone: req.body.primaryPhone,
        secondaryPhone: req.body.secondaryPhone,
        address: req.body.address,
        vetName: req.body.vetName,
      },
    });

    res
      .status(200)
      .json({ message: `${pet.name} profile created successfully` });
  } catch (error) {
    error.type = "input";
    next(error);
  }
};
