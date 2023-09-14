import React from "react";

function SearchBar({ handleSearch }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;