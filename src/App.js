import React, { useContext } from 'react';
import './assets/css/oneui.min.css';
import './assets/css/themes/amethyst.min.css';
import './assets/css/themes/city.min.css';
import './assets/css/themes/flat.min.css';
import './assets/css/themes/modern.min.css';
import './assets/css/themes/smooth.min.css';


import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from './context/AuthContext';
import axios from 'axios';
import NavbarCandidat from './composants/NavbarCandidat';
import HeaderCandidat from './composants/HeaderCandidat';
import NavbarEntreprise from './composants/NavbarEntreprise';
import NavbarAdmin from './composants/NavbarAdmin';


import Home from './pages/Home';
import LoginAdmin  from './pages/LoginAdmin';
import Login from './pages/Login'
import SignupCandidat  from './pages/SignupCandidat';
import SignupEntreprise from './pages/SignupEntreprise';
import InscriptionMembre from './pages/InscriptionMembre';
import CreateOffre  from './pages/CreateOffre';
import ShowAllOffre  from './pages/ShowAllOffre';
import ShowOneOffre  from './pages/ShowOneOffre';
import SearchOffre  from './pages/SearchOffre';


axios.defaults.withCredentials = true;

const App = () => {
  
  return (
    <BrowserRouter>
      
      <HeaderCandidat />
      <NavbarCandidat />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/loginAdmin" element={<LoginAdmin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signupCandidat" element={<SignupCandidat />} />
        <Route path="/signupEntreprise" element={<SignupEntreprise />} />
        <Route path="/createOffre" element={<CreateOffre />} />
        <Route path="/showAllOffre" element={<ShowAllOffre />} />
        <Route path="/inscriptionMembre" element={<InscriptionMembre />} />
        <Route path="/showOneOffre/:id" element={<ShowOneOffre />} />

        <Route path="/searchOffre" element={<SearchOffre />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
