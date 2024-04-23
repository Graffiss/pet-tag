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
router.get("/pet/missing", getPetsMissing);

// Get all pets for user - GET /api/pet/:userId
router.get("/pet", auth, getPets);

// Create new pet - POST /api/pet
router.post("/pet", auth, createValidator, handleInputErrors, createNewPet);

// Get single pet - GET /api/pet/:id
router.get("/pet/:id", getOnePet);

// Update existing pet - PUT /api/pet/:id
router.put("/pet/:id", auth, updateValidator, handleInputErrors, updatePet);

// Delete pet - DELETE /api/pet/:id
router.delete("/pet/:id", auth, deletePet);

export default router;
