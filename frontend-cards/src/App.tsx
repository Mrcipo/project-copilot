import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import LandingPage from './components/LandingPage';
import PrivateRoute from './components/PrivateRoute';

const App: React.FC = () => {
  return (
    <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Layout>
  </Router>
  );
};

export default App;