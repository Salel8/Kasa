import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes} from 'react-router';
//import { Switch } from "react-native";
//import { Switch } from 'react-router-dom';

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
    
      <Routes>
      
        <Route exact path="/" element={<Home />}/>
          
          <Route path="/A_Propos" element={<A_Propos />}/>
          
        
          <Route path="/Logement/:id" element={<Logement />}/>
          
        
          <Route path="*" element={<Error />}/>
          
        
        </Routes>
      
      <Footer />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
