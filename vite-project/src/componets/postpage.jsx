import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context";

export const Ppage = () => {
  const { post, setPost, posting } = useContext(DataContext);
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    const newEntry = { 
        ...post, 
        id: Date.now() // Assign unique ID
    };
    posting(newEntry);
    setPost({ name: '', description: '', count: 0 }); // Clear form
    navigate('/');
  };

  return (
    <main>
      <div style={{borderRadius: '10px', borderWidth: 'solid black 10px'}}>
      <h2>Add New Post</h2>
      </div>
      <form onSubmit={handleCreate}>
        <input
          style={{borderRadius: '10px'}} 
          placeholder="Name" 
          value={post.name} 
          onChange={(e) => setPost({...post, name: e.target.value})} 
        />
        <input 
          style={{borderRadius: '10px'}}
          placeholder="Count" type="number"
          value={post.count} 
          onChange={(e) => setPost({...post, count: e.target.value})} 
        />
        <div>
        <textarea
          style={{borderRadius: '10px'}} 
          placeholder="Description" 
          value={post.description} 
          onChange={(e) => setPost({...post, description: e.target.value})} 
        />
        </div>
        <button type="submit" style={{  marginLeft: '10px', borderRadius: '10px', backgroundColor: '#59df0cff'}}>Save Post</button>
        <button type="button" onClick={() => navigate('/')} style={{  marginLeft: '10px', borderRadius: '10px', backgroundColor: '#df0c0cff'}}>Cancel</button>
  
      </form>
    </main>
  );
};



/////made more adjustments to css on post page

////////dont forget about fixing the overflow problem for text in the home page