import { useState } from "react";
import "./SearchBar.css";
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("cars");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
    setTerm("");
  };

  const handleChange = (event) => {
    setTerm(event.target.value.replace(/a-z/, ""));
  };

  return (
    <>
      <div className="search-bar ">
        <form onSubmit={handleFormSubmit}>
          <label>Enter Search Term</label>
          <input onChange={handleChange} value={term} />
          {term.length < 3 && "Term must be longzer"}
        </form>
      </div>
    </>
  );
};

export default SearchBar;
