import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/mainPage';
import { ConfirmationPage } from './pages/confirmationPage';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path = "/" element = {<MainPage/>}/>
          <Route path = "/confirmationPage" element = {<ConfirmationPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
