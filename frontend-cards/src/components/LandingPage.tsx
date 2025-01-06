import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center text-white">
      <h1 className="text-4xl font-bold mb-8">Bienvenido a StudyCards</h1>
      <p className="text-center mb-8">
        StudyCards es una aplicación web que te permite crear, editar y eliminar tarjetas de estudio 
        para ayudarte a estudiar de manera más eficiente.
      </p>
      <div className="space-x-4">
        <Link to="/login">
          <button className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Login</button>
        </Link>
        <Link to="/register">
          <button className="bg-white text-blue-500 px-4 py-2 rounded shadow hover:bg-gray-200 transition">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;