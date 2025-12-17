import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context";

export const Epage = () => {
  const { poste, setPoste, epost } = useContext(DataContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    epost(poste);
    navigate('/');
  };

  return (
    <main>
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate}>
        <input 
          type="text" value={poste.name} 
          onChange={(e) => setPoste({...poste, name: e.target.value})} 
        />
        <textarea 
          value={poste.description} 
          onChange={(e) => setPoste({...poste, description: e.target.value})} 
        />
        <input 
          type="number" value={poste.count} 
          onChange={(e) => setPoste({...poste, count: e.target.value})} 
        />
        <button type="submit">Update Post</button>
      </form>
    </main>
  );
};