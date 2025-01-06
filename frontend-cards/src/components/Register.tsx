import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            await axios.post('http://localhost:3000/users/register', {
                name,
                email,
                password,
            });
            navigate('/home');
        } catch (error) {
            console.error('Error registering user:', error);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
            <h1 className="text-4xl font-bold mb-8">Bienvenido</h1>
            <p className="mb-4">En el siguiente formulario podrás ingresar tus datos para registrarte y tener acceso a la plataforma</p>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md text-blue-500">
                <label className="block mb-2">Nombre:</label>
                <input
                    type="text"
                    placeholder="Ingresa tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <label className="block mb-2">Email:</label>
                <input
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <label className="block mb-2">Contraseña:</label>
                <input
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-4 border rounded"
                />
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">Registrarme</button>
            </form>
        </div>
    );
};

export default Register;


// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register: React.FC = () => {
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (event: React.FormEvent) => {
//         event.preventDefault();
//         try {
//             await axios.post('http://localhost:3000/users/register', {
//                 name,
//                 email,
//                 password,
//             });
//             navigate('/home'); // Redirigir a la página de inicio
//         } catch (error) {
//             console.error('Error registering user:', error);
//         }
//     };

//     return (
//         <div>
//             <h1>Bienvenido</h1>
//             <p>
//                 En el siguiente formulario podrás ingresar tus datos para registrarte y
//                 tener acceso a la plataforma
//             </p>
//             <form onSubmit={handleSubmit}>
//                 <label>Nombre:</label>
//                 <input
//                     type="text"
//                     placeholder="Ingresa tu nombre"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                 />
//                 <label>Email:</label>
//                 <input
//                     type="email"
//                     placeholder="Ingresa tu email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 <label>Contraseña:</label>
//                 <input
//                     type="password"
//                     placeholder="Ingresa tu contraseña"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <button type="submit">Registrarme</button>
//             </form>
//         </div>
//     );
// };

// export default Register;