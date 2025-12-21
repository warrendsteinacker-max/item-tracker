import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context";

export const Epage = () => {
  const { poste, setPoste, epost } = useContext(DataContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    epost(poste); // Update the main data array
    navigate('/');
  };

  return (
    <main>
      <h2>Edit Page or Searched Item: {poste.name}</h2>
      <form onSubmit={handleUpdate}>
        <label>Name:</label>
        <input 
          value={poste.name} 
          onChange={(e) => setPoste({...poste, name: e.target.value})} 
        />
        
        <label>Count:</label>
        <input 
          type="number" 
          value={poste.count} 
          onChange={(e) => setPoste({...poste, count: e.target.value})} 
        />

        <label>Description:</label>
        <textarea 
          value={poste.description} 
          onChange={(e) => setPoste({...poste, description: e.target.value})} 
        />

        <button type="submit">Update Changes</button>
        <button type="button" onClick={() => navigate('/')}>Cancel Search</button>
      </form>
    </main>
  );
};