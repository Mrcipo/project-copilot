import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CardList from "./CardList";
import CreateCard from "./CreateCard";
import { Card } from "../interfaces/Card";
import { Button } from "@/components/ui/button";
// import Layout from "./Layout";

const Home: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/cards", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setCards(response.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    fetchCards();
  }, []);

  const handleCardCreated = (newCard: Card) => {
    setCards([...cards, newCard]);
  };

  const handleCardDeleted = (deletedCardId: number) => {
    setCards(cards.filter((card) => card.id !== deletedCardId));
  };

  const handleCardUpdated = (updatedCard: Card) => {
    setCards(
      cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="w-full flex justify-between items-center p-4 bg-gray-800 shadow-md">
        <h1 className="text-4xl">Bienvenido al Home</h1>
        <Button size="sm" onClick={handleLogout}>
          Cerrar Sesion
        </Button>
      </div>
      <div className="w-full p-4">
        <CreateCard onCardCreated={handleCardCreated} />
        <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <CardList
              key={card.id}
              className="py-4"
              cards={[card]}
              onCardDeleted={handleCardDeleted}
              onCardUpdated={handleCardUpdated}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import CardList from "./CardList";
// import CreateCard from "./CreateCard";
// import { Card } from "../interfaces/Card";
// import { Button } from "@/components/ui/button";

// const Home: React.FC = () => {
//   const [cards, setCards] = useState<Card[]>([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchCards = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const response = await axios.get("http://localhost:3000/cards", {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setCards(response.data);
//       } catch (error) {
//         console.error("Error fetching cards:", error);
//       }
//     };

//     fetchCards();
//   }, []);

//   const handleCardCreated = (newCard: Card) => {
//     setCards([...cards, newCard]);
//   };

//   const handleCardDeleted = (deletedCardId: number) => {
//     setCards(cards.filter((card) => card.id !== deletedCardId));
//   };

//   const handleCardUpdated = (updatedCard: Card) => {
//     setCards(
//       cards.map((card) => (card.id === updatedCard.id ? updatedCard : card))
//     );
//   };

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="flex flex-col p-4">
//       <div className="flex justify-between items-center p-4">
//         <h1 className="text-4xl">Bienvenido al Home</h1>
//         <Button size="sm" onClick={handleLogout}>
//           Cerrar Sesion
//         </Button>
//       </div>
//       <div>
//         <CreateCard onCardCreated={handleCardCreated} />
//         <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 xl:grid-cols-3">
//           {cards.map((card) => (
//             <CardList
//               key={card.id}
//               className="py-4"
//               cards={[card]}
//               onCardDeleted={handleCardDeleted}
//               onCardUpdated={handleCardUpdated}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
