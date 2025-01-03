import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

// Obtener todos los usuarios
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener un usuario por ID
export const getUserById = async (req, res) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id: parseInt(req.params.id) }
        });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear un nuevo usuario
export const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password
            },
        });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar un usuario existente
export const updateUser = async (req, res) => {
    try {
        const updatedUser = await prisma.user.update({
            where: { id: parseInt(req.params.id) },
            data: req.body
        });
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar un usuario
export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: { id: parseInt(req.params.id) }
        });
        if (!user) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
