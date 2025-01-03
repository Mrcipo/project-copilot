import express from 'express';
import { getAllCards, createCard, updateCard, deleteCard, searchCardsByTitle } from '../controllers/cardControllers.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Ruta para obtener todas las tarjetas
router.get('/', authenticateToken, getAllCards);

// Ruta para crear una nueva tarjeta
router.post('/', authenticateToken, createCard);

// Ruta para actualizar una tarjeta por ID
router.put('/:id', authenticateToken, updateCard);

// Ruta para eliminar una tarjeta por ID
router.delete('/:id', authenticateToken, deleteCard);

// Ruta para buscar tarjetas por título
router.get('/search', authenticateToken, searchCardsByTitle);

export default router;