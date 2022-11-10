import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${query}`);
    setQuery("");
  }

  return (
    <>
      <div className="search-bar-container">
        <form className="search-bar-form" onSubmit={handleSearch}>
          <i id="magnifying-glass" class="fa-solid fa-magnifying-glass"></i>
          <input 
          type="text"
          placeholder="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)} />
        </form>
      </div>
    </>
  )
}

export default SearchBar;