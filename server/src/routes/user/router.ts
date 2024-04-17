import { Router } from "express";
import { createNewUser, login } from "../../controllers";
import { protect } from "../../middlewares/auth/auth";

const router = Router();

// router.use("/user", userRoutes);

// AUTH

// Register - POST /api/user
router.post("/", createNewUser);
// Login - POST /api/user/login
router.post("/login", protect, login);

// Logout - POST /api/user/logout
// router.post("/logout", auth, logout);

// Verify Email - POST /api/user/verify-email
// router.post("/verify-email", verifyEmail);

// Refresh Token - POST /api/user/refresh-token
// router.post("/refresh-token", refreshToken);

// Forgot Password - POST /api/user/forgot-password
// router.post("/forgot-password", auth, forgotPassword);

// Send Verification Code - POST /api/user/send-verification-code
// router.post("/send-verification-code", sendVerificationCode);

// EDIT USER

// Edit User - PUT /api/user
// router.put("/", auth, imageUpload, editUser);

// Change Password - POST /api/user/change-password
// router.post("/change-password", auth, changePassword);

// GET USER
// router.get("/", auth, getUser);

// DELETE USER
// router.delete("/", auth, deleteUser);

export default router;
