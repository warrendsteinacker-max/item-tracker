import { useContext } from "react";
import { DataContext } from "../context";

export const Search = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div className="search-container">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search by name or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ddd' }}
        />
      </form>
    </div>
  );
};