/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <div>
        <img src="search.svg" alt="search"  loading="lazy"/>

        <input
          type="text"
          placeholder="Search through thousands of movies"
          aria-label="Search movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
