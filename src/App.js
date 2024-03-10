import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateNewCardPage from './pages/CreateNewCardPage';
import EditProfilePage from './pages/EditProfilePage';
import AboutPage from './pages/AboutPage';
import FavoritesPage from './pages/FavoritesPage';
import BusinessPage from './pages/BusinessPage';

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/signin" element={<LoginPage/>} />
          <Route path="/newcard" element={<CreateNewCardPage/>} />
          <Route path="/edit" element={<EditProfilePage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/favorites" element={<FavoritesPage/>} />
          <Route path="/Business" element={<BusinessPage/>} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;