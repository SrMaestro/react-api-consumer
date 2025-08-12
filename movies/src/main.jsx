import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import{BrowserRouter, Routes, Route} from 'react-router-dom'

import './index.css'

import App from './App.jsx'
import Home from './pages/Home.jsx'
import Movie from './pages/Movie.jsx'
import Search from './pages/Search.jsx'
import Favorites from './pages/Favorites.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App/>}>
        <Route path="/" element={<Home/>}></Route>
        <Route path="movie/:id" element={<Movie/>}></Route>
        <Route path="search" element={<Search/>}></Route>
        <Route path="favorites" element={<Favorites/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
