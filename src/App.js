import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import HeaderMenu from './components/HeaderMenu';
import HomePage from './components/HomePage';
import VisionSystemConfPage from './components/VisionSystemConfigurationPage';
import DeepLearningToolsPage from './components/DeepLearningToolsPage';

//Componentes de Rutas
const Home = () => <h1>Home</h1>



function App() {

  return (
    <div className="App">
      <head>
        <script
          src="https://unpkg.com/react@16/umd/react.development.js"
          crossorigin
        ></script>
        <script
          src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
          crossorigin
        ></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
      </head>

      <div id='header-menu' className="App-header">
        <HeaderMenu />
      </div>
      <body className="App-body">
        <Routes>
          <Route path='/' element={<HomePage ></HomePage>} />
          <Route path='/VSConfPage' element={<VisionSystemConfPage ></VisionSystemConfPage>} />
          <Route path='/DLToolsPage' element={<DeepLearningToolsPage ></DeepLearningToolsPage>} />
          <Route path='/hola' element={<DeepLearningToolsPage ></DeepLearningToolsPage>} />
        </Routes>
        <p>

        </p>
      </body>
    </div>
  );
}

export default App;
