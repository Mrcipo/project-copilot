import React from "react";
import { Link } from "react-router-dom";
import "../styles/Layout.css";

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        <nav className="fixed top-0 left-0 w-full z-50 bg-gray-800 shadow-md">
          <ul className="flex justify-around p-4">
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="pt-16">{children}</main> {/* Add padding to avoid content being hidden behind the fixed nav */}
      {/* <footer>
        <p>&copy; 2023 My App</p>
      </footer> */}
    </div>
  );
};

export default Layout;
