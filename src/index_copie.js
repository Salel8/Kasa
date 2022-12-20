import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes} from 'react-router';
//import { Switch } from "react-native";

import './styles/index.css';
import Home from './pages/Home.jsx';
import A_Propos from './pages/A_Propos.jsx';
import Logement from './pages/Logement.jsx';
import Header from './components/Header';
import Footer from './components/footer';
import Error from './pages/Erreur.jsx';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Route exact path="/">
          <Home />
        </Route> 
        <Route path="/A_Propos">
          <A_Propos />
        </Route>
        <Route path="/Logement/:id">
          <Logement />
        </Route>
        <Route path="/Erreur">
          <Error />
        </Route>
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
