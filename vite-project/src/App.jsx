import { useState, useEffect } from 'react'


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

  return (
    <>
      
    </>
  )
}

export default App
