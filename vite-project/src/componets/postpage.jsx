import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context";

export const Ppage = () => {
  const { post, setPost, posting } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    const newEntry = { id, name: post.name, description: post.description, count: post.count };
    posting(newEntry);
    setPost({ name: '', description: '', count: 0 }); // Reset form
    navigate('/');
  };

  return (
    <main>
      <h2>Add New Post</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" placeholder="Name" required
          value={post.name} onChange={(e) => setPost({...post, name: e.target.value})} 
        />
        <textarea 
          placeholder="Description" required
          value={post.description} onChange={(e) => setPost({...post, description: e.target.value})} 
        />
        <input 
          type="number" placeholder="Count" required
          value={post.count} onChange={(e) => setPost({...post, count: e.target.value})} 
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
