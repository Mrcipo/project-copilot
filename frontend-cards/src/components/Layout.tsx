import React from "react";
import { Link } from "react-router-dom";
// import "../styles/Layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 w-full z-50">
        <nav className="flex justify-between items-center container mx-auto">
          <h1 className="text-2xl font-bold">Mi Aplicación</h1>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:underline">Home</Link>
            </li>
            <li>
              <Link to="/login" className="hover:underline">Login</Link>
            </li>
            <li>
              <Link to="/register" className="hover:underline">Register</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-grow pt-16 container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-800 p-4 text-center">
        <p>&copy; 2023 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Layout;


// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Layout.css";

// const Layout: React.FC = ({ children }) => {
//   return (
//     <div>
//       <header>
//         <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md">
//           <ul className="flex justify-around p-4">
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//           </ul>
//         </nav>
//       </header>
//       <main className="pt-16">{children}</main> {/* Add padding to avoid content being hidden behind the fixed nav */}
//       {/* <footer>
//         <p>&copy; 2023 My App</p>
//       </footer> */}
//     </div>
//   );
// };

// export default Layout;
