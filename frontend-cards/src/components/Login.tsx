import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      console.error("Error login user:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-8">Bienvenido al login</h1>
      <p className="mb-4">Completa el siguiente formulario para ingresar a la APP</p>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md text-blue-500">
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
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;






// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const Login: React.FC = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (event: React.FormEvent) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000/users/login", {
//         email,
//         password,
//       });
//       localStorage.setItem("token", response.data.token);
//       navigate("/home");
//     } catch (error) {
//       console.error("Error login user:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>Bienvenido al login</h1>
//       <p>Completa el siguiente formulario para ingresar a la APP</p>
//       <form onSubmit={handleSubmit}>
//         <label>Email:</label>
//         <input
//           type="email"
//           placeholder="Ingresa tu email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <label>Contraseña:</label>
//         <input
//           type="password"
//           placeholder="Ingresa tu contraseña"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">LOGIN</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

