import { useState, useEffect, useContext } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Home } from './componets/homepage'
import { Ppage } from './componets/postpage'
import { Epage } from './componets/editpage'
import { DataProvider } from './context'
import { PC } from './componets/practice'
import { Box } from './componets/box'
import { C } from './componets/C'

///got it

function App() {

const {data} = useContext(DataProvider)

  return (
    <>
    <DataProvider>
    <BrowserRouter>
    <Routes>
      <Route path="/ps" element={<C data={data}/>}/>
      <Route path="/pp/:id" element={<Box />}></Route>
      <Route path="/p" element={<PC Dd={[{name: 'e', age: 5, id: 55}, {name: 'd', age: 4, id: 56}, {name: 'c', age: 3, id: 57}, {name: 'b', age: 2, id: 58}, {name: 'a', age: 1, id: 59}]} />}/>
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