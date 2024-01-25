import './App.css';
import React from 'react';
import MainPage from './pages/mainpage/mainpage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/signin/signin';
import Register from './pages/register/register';
import Forgetpass from './pages/forgetpassword/frogetpass';
import Showproduct from './pages/showproduct/showproduct';




function App() {
  

  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<MainPage/>}></Route>
        <Route path='/login' element={<Login/>} ></Route>
        <Route path='/register'element={<Register/> } ></Route>
        <Route path='/forgetpass' element={<Forgetpass/>} ></Route>
        <Route path='/:id' element={<Showproduct/>} ></Route>
      </Routes>

      
   
     
     
     
    </div>
  );
}

export default App;
