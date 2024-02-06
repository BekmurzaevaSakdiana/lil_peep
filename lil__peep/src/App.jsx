import { useEffect, useState } from 'react'
import './App.css'
import AboutPeep from './components/AboutPeep'
import Main from './components/Main'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import Busket from './components/Busket'
import CartContext from './Context/CartContext'
import LikeContext from './ContextForLiked/LikeContext'
import Register from './components/Register'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/home/Home'
import Login from './pages/auth/Login'







export const merch = [
  {
    id: 1,
    title: 'Red hoodie',
    price: 8999,
    imgUrl: './img/hoodie.jpg',
  },
  {
    id: 2,
    title: 'White hoodie',
    price: 8999,
    imgUrl: './img/hoodie2.jpg',

  },
  {
    id: 3,
    title: 'Black Bag',
    price: 8999,
    imgUrl: './img/bag.jpg',
  },
  {
    id: 4,
    title: 'Black T-shirt',
    price: 8999,
    imgUrl: './img/tShort.jpg',

  },
  {
    id: 5,
    title: 'Violet T-shirt',
    price: 8999,
    imgUrl: './img/tShort3.jpeg',

  },
  {
    id: 6,
    title: 'Red cap',
    price: 8999,
    imgUrl: './img/Shapka.jpg',

  },

]






function App() {

  const [card, setCard] = useState([])




  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('cart') ?? '[]')
    setCard(data)
  }, [])


  const [like, setLiked] = useState([])

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem('like') ?? '[]')
    setLiked(data)
  }, [])



  return (
    <CartContext.Provider value={[card, setCard]}>
      <LikeContext.Provider value={[like, setLiked]}>

        <Routes>
          <Route path='/' element={<Layout />} >
            <Route index element={<Home />} />
            <Route path='login' element={<Login/>}/>
            <Route path='about' element={<AboutPeep/>}/>
          </Route>

        </Routes>





      </LikeContext.Provider>
    </CartContext.Provider>





  )
}

export default App
