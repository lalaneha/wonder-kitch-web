import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result} className="list-group-item">
          <img alt="recipe" src={result.image} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
