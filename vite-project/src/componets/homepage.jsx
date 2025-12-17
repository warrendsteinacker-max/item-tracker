import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { DataContext } from "../context";
import { Search } from "./searchbare";

export const Home = () => {
  const { searchResults, setPoste, del } = useContext(DataContext);
  const navigate = useNavigate();

  const goToEdit = (item) => {
    setPoste(item); // Load this item into the 'poste' state
    navigate('/epage'); // Move to edit page
  };

  return (
    <main>
      <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
        <h1>My Inventory</h1>
        <Link to="/ppage"><button>+ Add New Item</button></Link>
      </header>

      <Search />

      <div className="list-container">
        {searchResults.length ? (
          searchResults.map((item) => (
            <div key={item.id} style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0' }}>
              <h3>{item.name} (Qty: {item.count})</h3>
              <p>{item.description}</p>
              <button onClick={() => goToEdit(item)}>Edit</button>
              <button onClick={() => del(item.id)} style={{ color: 'red' }}>Delete</button>
            </div>
          ))
        ) : (
          <p>No items found.</p>
        )}
      </div>
    </main>
  );
};