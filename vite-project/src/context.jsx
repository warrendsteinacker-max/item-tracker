import { createContext, useState, useEffect } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // 1. Fixed Initialization: Starts with data from storage immediately
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem("item");
      return saved ? JSON.parse(saved) : [];
    } catch (error) {
      console.error("Local Storage Error:", error);
      return [];
    }
  });

  const [post, setPost] = useState({ name: '', description: '', count: 0 });
  const [poste, setPoste] = useState({ name: '', description: '', count: 0 });
  const [search, setSearch] = useState("");
  const [userd, setuSearch] = useState("");
  const [userddB, setudbSearch] = useState(false);


  /////REMEBER TO DELET THIS IS PRACTICE
  //const Dd = [{name: e, age: 5}, {name: d, age: 4}, {name: c, age: 3}, {name: b, age: 2}, {name: a, age: 1}] 

  // 2. Permanent Sync: Saves whenever 'data' changes
  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(data));
  }, [data]);

  useEffect(() => { 

      const startdebounce = () => {
        setTimeout(() => {
          
        }, 10000).then(() => {}).catch((error) => {console.error(error.message)})
      }
    
  }, [userd]);

  const posting = (newpost) => {
    setData([...data, newpost]);
  };

  const del = (id) => {
    setData(data.filter((i) => i.id !== id));
  };

  const epost = (updatedPost) => {
    setData(data.map((i) => (i.id === updatedPost.id ? updatedPost : i)));
  };

  const searchResults = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DataContext.Provider 
      value={{ 
        data, setData, post, setPost, poste, setPoste, search, setSearch,
        searchResults, posting, del, epost 
      }}
    >
      {children}
    </DataContext.Provider>
  );
};