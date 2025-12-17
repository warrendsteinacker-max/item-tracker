import { createContext } from "react";
import { useState, useEffect } from 'react';


export const DataContext = createContext({

})



export const DataProvider = ({children}) => {

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
    

    return(
        <DataContext.Provider value={{}}>
            {children}
        </DataContext.Provider>
    )
}