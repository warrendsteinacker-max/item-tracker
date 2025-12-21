import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context";
import { Search } from "./searchbare";

export const Home = () => {
  const { searchResults, setPoste, del } = useContext(DataContext);
  const navigate = useNavigate();

  const handleEdit = (item) => {
    setPoste(item); // Load the global 'poste' state
    navigate('/epage'); // Redirect
  };

  return (
    <main style={{ padding: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <h1>Inventory</h1>
        <Link to="/ppage"><button style={{ cursor: 'pointer' }}>+ New Item</button></Link>
      </header>

      <Search />

      <div style={{ marginTop: '20px' }}>
        {searchResults.length ? (
          searchResults.map((item) => (
            <article key={item.id} style={{ border: '1px solid #242020ff', padding: '15px', borderRadius: '8px', marginBottom: '10px' }}>
              <h3>{item.name} <small>(Qty: {item.count})</small></h3>
              <p>{item.description}</p>
              <button onClick={() => handleEdit(item)}>Edit</button>
              <button onClick={() => del(item.id)} style={{ color: 'red', marginLeft: '10px' }}>Delete</button>
            </article>
          ))
        ) : (
          <p>Nothing found. Start by adding a post!</p>
        )}
      </div>
    </main>
  );
};