import { createContext, useState, useEffect } from "react";

export const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  
  // Using 'post' for New Post name/desc and 'poste' for Edit name/desc
  const [post, setPost] = useState({ name: '', description: '', count: 0 });
  const [poste, setPoste] = useState({ name: '', description: '', count: 0 });
  const [search, setSearch] = useState("");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("item");
      if (saved) setData(JSON.parse(saved));
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(data));
  }, [data]);

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