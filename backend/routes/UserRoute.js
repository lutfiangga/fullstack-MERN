import express from "express";
import { addUser, deleteUser, getUsers, getUsersById, updateUser } from "../controllers/UserController.js";
const router = express.Router()

router.get('/users', getUsers);
router.post('/users', addUser);
router.get('/users/:id', getUsersById);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router