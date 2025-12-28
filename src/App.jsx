import { useState, useEffect, useContext } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './componets/homepage'
import { Ppage } from './componets/postpage'
import { Epage } from './componets/editpage'
import { DataProvider } from './context'


function App() {



  return (
    <>
    <DataProvider>
    <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ppage" element={<Ppage />}/>
      <Route path="/epage" element={<Epage />}/>
      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
    </Router>
    </DataProvider>
    </>
  )
}
//
export default App


