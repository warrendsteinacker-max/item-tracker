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
      <h2>Add New Post</h2>
      <form onSubmit={handleCreate}>
        <input 
          placeholder="Name" 
          value={post.name} 
          onChange={(e) => setPost({...post, name: e.target.value})} 
        />
        <input 
          placeholder="Count" type="number"
          value={post.count} 
          onChange={(e) => setPost({...post, count: e.target.value})} 
        />
        <textarea 
          placeholder="Description" 
          value={post.description} 
          onChange={(e) => setPost({...post, description: e.target.value})} 
        />
        <button type="submit">Save Post</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </main>
  );
};
