import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/userControllers.js'
import { register, login } from '../controllers/authControllers.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', register);

// Ruta para iniciar sesión
router.post('/login', login);

// Rutas protegidas
router.get('/', authenticateToken, getAllUsers);
router.get('/:id', authenticateToken, getUserById);

export default router;