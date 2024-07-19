import { Router } from "express";
import { createNewPet } from "../../controllers/pet/create";
import { auth } from "../../middlewares/auth";
import { getOnePet } from "../../controllers/pet/getOne";
import { deletePet } from "../../controllers/pet/delete";
import { updatePet } from "../../controllers/pet/update";
import { getPets } from "../../controllers/pet/getPets";
import { getPetsMissing } from "../../controllers/pet/getMissing";
import { handleInputErrors } from "../../middlewares/handle-input-error";
import { updateValidator } from "../../middlewares/validators/pet/update.validator";
import { createValidator } from "../../middlewares/validators/pet/create.validator";

const router = Router();

// PET

// Get all missing pets - GET /api/pet/missing
router.get("/missing", getPetsMissing);

// Get all pets for user - GET /api/pet/:userId
router.get("/", auth, getPets);

// Create new pet - POST /api/pet
router.post("/", auth, createValidator, handleInputErrors, createNewPet);

// Get single pet - GET /api/pet/:id
router.get("/:id", getOnePet);

// Update existing pet - PUT /api/pet/:id
router.put("/:id", auth, updateValidator, handleInputErrors, updatePet);

// Delete pet - DELETE /api/pet/:id
router.delete("/:id", auth, deletePet);

router.use((error, req, res, next) => {
  if (error.type === "auth") {
    res.status(401).json({ error: "Unauthorized" });
  } else if (error.type === "input") {
    res.status(400).json({ error: "Invalid input" });
  } else {
    res.status(500).json({ error: `Something went wrong: ${error.message}` });
  }
});

export default router;
