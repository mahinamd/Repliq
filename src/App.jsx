import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Homes from './Pages/Home/Homes';

function App() {
  

  return (
    <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homes/>} />
       
      
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
