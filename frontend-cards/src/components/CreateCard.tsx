import React, { useState } from 'react';
import axios from 'axios';
import { Card } from '../interfaces/Card';
import { Button } from "@/components/ui/button";

interface CreateCardProps {
  onCardCreated: (card: Card) => void;
}

const CreateCard: React.FC<CreateCardProps> = ({ onCardCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:3000/cards', {
        title,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onCardCreated(response.data);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error creating card:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4 bg-white shadow-md rounded-md w-1/3 mx-auto">
      <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">Título:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      </div>
      <div className="flex flex-col">
      <label className="mb-2 font-semibold text-gray-700">Descripción:</label>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      </div>
      <Button type="submit" className="w-full py-2 mt-4 bg-gray-800 text-white rounded-md hover:bg-gray-600">
      Crear Tarjeta
      </Button>
    </form>
  );
};

export default CreateCard;