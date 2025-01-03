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
    <div>
      <h1>Bienvenido al login</h1>
      <p>Completa el siguiente formulario para ingresar a la APP</p>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input
          type="email"
          placeholder="Ingresa tu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Contraseña:</label>
        <input
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
// const Login = () => {
//   return (
//     <div>
//       <h1>Bienvenido al login</h1>
//       <p>Completa el siguiente formulario para ingresar a la APP</p>
//       <form action="">
//         <label>Email:</label>
//         <input type="email" placeholder="Ingresa tu email" />
//         <label>Contraseña:</label>
//         <input type="password" placeholder="Ingresa tu contraseña" />
//         <button>Ingresar</button>
//       </form>
//     </div>
//   );
// };

// export default Login;
