import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import { Home } from './componets/homepage'
import { Ppage } from './componets/postpage'
import { Epage } from './componets/editpage'



function App() {
  const [data, setData] = useState([])
  const [post, setPost] = useState([])
  const [poste, setPoste] = useState([])

  useEffect(() => {
    try{
        const d = JSON.parse(localStorage.getItem('item'))
        if (d){
          setData(d)
        }
        else{
          setData([])
        }
      }
    catch(error){
        console.error(error.message)
    }

  }, []
)

//all good

const posting = (newpost) => {
    try{
      const allp = [...data, newpost]
      setData(allp)
    }
    catch(error){
      console.error(error.message)
    }
}

const del = () => {

}

const epost = () => {

}



  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ppage" element={<Ppage />}/>
      <Route path="/epage" element={<Epage />}/>
      <Route path="*" element={<h1>Page not found</h1>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
