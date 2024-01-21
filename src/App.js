import './App.css';
import React from 'react';

import MainPage from './pages/mainpage/mainpage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/signin/signin';
import Register from './pages/register/register';
import Forgetpass from './pages/forgetpassword/frogetpass';




function App() {
  

  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register'element={<Register/> } ></Route>
        <Route path='/forgetpass' element={<Forgetpass/>} ></Route>
      </Routes>
   
     
     
     
    </div>
  );
}

export default App;
