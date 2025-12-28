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
          className="editpfeilds"
          value={poste.name} 
          onChange={(e) => setPoste({...poste, name: e.target.value})} 
        />
        
        <label>Count:</label>
        <input
          className="editpfeilds" 
          styles={{borderRadius: '10px'}}
          type="number" 
          value={poste.count} 
          onChange={(e) => setPoste({...poste, count: e.target.value})} 
        />

        <label>Description:</label>
        <textarea 
          className="editpfeilds"
          styles={{borderRadius: '10px'}}
          value={poste.description} 
          onChange={(e) => setPoste({...poste, description: e.target.value})} 
        />

        <button type="submit" style={{borderRadius: '10px', marginLeft: '10px', backgroundColor: 'green'}}>Update Changes</button>
        <button type="button" style={{borderRadius: '10px', marginLeft: '10px', backgroundColor: 'red'}} onClick={() => navigate('/')}>Cancel Search</button>
      </form>
    </main>
  );
};


//////dont forget to fix styleing

////fixed edit page