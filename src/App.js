import './App.css';
import React, { createContext, useEffect, useState } from 'react';
import MainPage from './pages/mainpage/mainpage';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/signin/signin';
import Register from './pages/register/register';
import Forgetpass from './pages/forgetpassword/frogetpass';
import Showproduct from './pages/showproduct/showproduct';
import axios from 'axios';


export const Productcontext = createContext()


function App() {



  const [productdata , Setproductdata]=useState([])
  useEffect(()=>{
      axios.get('https://fakestoreapi.com/products').then(res=>(Setproductdata(res.data)))
     
  })

  return (
    <div className="App">
      <Productcontext.Provider value={{productdata}}>
        <Routes>
            <Route path='/' element={<MainPage/>}></Route>
            <Route path='/login' element={<Login/>} ></Route>
            <Route path='/register'element={<Register/> } ></Route>
            <Route path='/forgetpass' element={<Forgetpass/>} ></Route>
            <Route path='/:id' element={<Showproduct/>} ></Route>
          </Routes>

      </Productcontext.Provider>

      
        
       
      
   
     
     
     
    </div>
  );
}

export default App;
