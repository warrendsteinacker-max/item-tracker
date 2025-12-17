import { useState, useEffect } from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'


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
      
    </>
  )
}

export default App
