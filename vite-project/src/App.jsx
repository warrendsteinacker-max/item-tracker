import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Home } from './componets/homepage'
import { Ppage } from './componets/postpage'
import { Epage } from './componets/editpage'
import { DataProvider } from './context'
//import { PC } from './componets/practice'



function App() {

  return (
    <>
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ppage" element={<Ppage />}/>
      <Route path="/epage" element={<Epage />}/>
      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
    </BrowserRouter>
    </DataProvider>
    </>
  )
}

export default App


 //<button onClick={() => ggp()}>go to new p page</button>