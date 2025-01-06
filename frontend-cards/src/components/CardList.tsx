import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";

interface Card {
  id: number;
  title: string;
  description: string;
}

interface CardListProps {
  cards: Card[];
  onCardDeleted: (id: number) => void;
  onCardUpdated: (updatedCard: Card) => void;
}

const CardList: React.FC<CardListProps> = ({ cards, onCardDeleted, onCardUpdated }) => {
  const [editingCard, setEditingCard] = useState<Card | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3000/cards/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onCardDeleted(id);
    } catch (error) {
      console.error('Error deleting card:', error);
    }
  };

  const handleEdit = (card: Card) => {
    setEditingCard(card);
    setTitle(card.title);
    setDescription(card.description);
  };

  const handleUpdate = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingCard) return;

    try {
      const token = localStorage.getItem('token');
      const response = await axios.put(`http://localhost:3000/cards/${editingCard.id}`, {
        title,
        description,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onCardUpdated(response.data);
      setEditingCard(null);
      setTitle('');
      setDescription('');
    } catch (error) {
      console.error('Error updating card:', error);
    }
  };

  return (
    <div>
      {editingCard && (
        <form onSubmit={handleUpdate} className="bg-white p-4 rounded shadow-md text-blue-500">
          <h2 className="text-2xl font-bold mb-4">Editar Tarjeta</h2>
          <label className="block mb-2">Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <label className="block mb-2">Descripción:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 mb-4 border rounded"
          />
          <Button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">Actualizar</Button>
          <Button type="button" onClick={() => setEditingCard(null)} className="bg-gray-500 text-white px-4 py-2 rounded shadow hover:bg-gray-600 transition ml-2">Cancelar</Button>
        </form>
      )}
      <ul className="flex flex-col py-6">
        {cards.map((card) => (
          <li className="flex flex-col p-2 mt-4 bg-white text-blue-500 border border-gray-200 rounded-lg shadow-md" key={card.id}>
            <h2 className="text-2xl">{card.title}</h2>
            <p>{card.description}</p>
            <Button size="sm" onClick={() => handleDelete(card.id)} className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 transition mt-2">Eliminar</Button>
            <Button size="sm" onClick={() => handleEdit(card)} className="bg-yellow-500 text-white px-4 py-2 rounded shadow hover:bg-yellow-600 transition mt-2">Editar</Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardList;



// import React, { useState } from 'react';
// import axios from 'axios';
// import { Button } from "@/components/ui/button";

// interface Card {
//   id: number;
//   title: string;
//   description: string;
// }

// interface CardListProps {
//   cards: Card[];
//   onCardDeleted: (id: number) => void;
//   onCardUpdated: (updatedCard: Card) => void;
// }

// const CardList: React.FC<CardListProps> = ({ cards, onCardDeleted, onCardUpdated }) => {
//   const [editingCard, setEditingCard] = useState<Card | null>(null);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');

//   const handleDelete = async (id: number) => {
//     try {
//       const token = localStorage.getItem('token');
//       await axios.delete(`http://localhost:3000/cards/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       onCardDeleted(id);
//     } catch (error) {
//       console.error('Error deleting card:', error);
//     }
//   };

//   const handleEdit = (card: Card) => {
//     setEditingCard(card);
//     setTitle(card.title);
//     setDescription(card.description);
//   };

//   const handleUpdate = async (event: React.FormEvent) => {
//     event.preventDefault();
//     if (!editingCard) return;

//     try {
//       const token = localStorage.getItem('token');
//       const response = await axios.put(`http://localhost:3000/cards/${editingCard.id}`, {
//         title,
//         description,
//       }, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       onCardUpdated(response.data);
//       setEditingCard(null);
//       setTitle('');
//       setDescription('');
//     } catch (error) {
//       console.error('Error updating card:', error);
//     }
//   };

//   return (
//     <div>
//       {editingCard && (
//         <form onSubmit={handleUpdate}>
//           <h2>Editar Tarjeta</h2>
//           <label>
//             Título:
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//             />
//           </label>
//           <label>
//             Descripción:
//             <input
//               type="text"
//               value={description}
//               onChange={(e) => setDescription(e.target.value)}
//             />
//           </label>
//           <Button type="submit">Actualizar</Button>
//           <Button type="button" onClick={() => setEditingCard(null)}>Cancelar</Button>
//         </form>
//       )}
//       <ul className=" flex flex-col py-6">
//         {cards.map((card) => (
//           <li 
//             className="flex flex-col p-2 mt-4 border border-gray-200 rounded-lg shadow-md" 
//             key={card.id}>
//             <h2 className='text-2xl'>{card.title}</h2>
//             <p>{card.description}</p>
//             <Button size='sm' onClick={() => handleDelete(card.id)}>Eliminar</Button>
//             <Button className='mt-2' size='sm' onClick={() => handleEdit(card)}>Editar</Button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default CardList;