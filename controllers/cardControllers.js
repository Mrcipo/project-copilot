import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todas las tarjetas del usuario autenticado
export const getAllCards = async (req, res) => {
    try {
        const cards = await prisma.card.findMany({
            where: { userId: req.user.id }
        });
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva tarjeta
export const createCard = async (req, res) => {
    const { title, description } = req.body;
    try {
        const newCard = await prisma.card.create({
            data: {
                title,
                description,
                userId: req.user.id,
            },
        });
        res.status(201).json(newCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una tarjeta existente
export const updateCard = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;

    try {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
        });

        if (!card || card.userId !== req.user.id) {
            return res.status(404).json({ message: 'Tarjeta no encontrada o no autorizada' });
        }

        const updatedCard = await prisma.card.update({
            where: { id: parseInt(id) },
            data: { title, description },
        });

        res.status(200).json(updatedCard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una tarjeta por ID
export const deleteCard = async (req, res) => {
    const { id } = req.params;

    try {
        const card = await prisma.card.findUnique({
            where: { id: parseInt(id) },
        });

        if (!card || card.userId !== req.user.id) {
            return res.status(404).json({ message: 'Tarjeta no encontrada o no autorizada' });
        }

        await prisma.card.delete({
            where: { id: parseInt(id) },
        });

        res.status(200).json({ message: 'Tarjeta eliminada' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Obtener una tarjeta por Title
export const searchCardsByTitle = async (req, res) => {
    const { title } = req.query;

    try {
        const cards = await prisma.card.findMany({
            where: {
                userId: req.user.id,
                title: {
                    contains: title,
                    mode: 'insensitive',
                },
            },
        });

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};