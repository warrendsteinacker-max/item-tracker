import { useContext } from "react";
import { DataContext } from "../context";

export const Search = () => {
  const { search, setSearch } = useContext(DataContext);

  return (
    <div id="FF" className="search-bar">
      <input
        type="text"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '90%', padding: '10px', fontSize: '16px', borderRadius: '10px' }}
      />
    </div>
  );
};