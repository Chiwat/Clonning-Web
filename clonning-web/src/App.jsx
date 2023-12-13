import { useState } from 'react'
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import Payment from './components/Payment'

function App() {
  
  return (
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/payment' element={<Login/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
        </Routes>
    </Router>
  )
}

export default App
