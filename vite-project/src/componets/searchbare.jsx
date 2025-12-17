import { useContext } from "react";
import { DataContext } from "../context";

export const Search = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '10px', fontSize: '16px' }}
      />
    </div>
  );
};