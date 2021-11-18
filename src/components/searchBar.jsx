import React from "react";
import searchIcon from "../images/search-icon.png";

const SearchBar = (props) => {
  let userName;

  const handleSubmit = (ev) => {
    ev.preventDefault();
    userName = ev.target[0].value.trim();
    ev.target[0].value = "";

    if (userName !== "") {
      fetch(`https://api.github.com/users/${userName}`)
        .then((res) => (res = res.json()))
        .then((result) => props.handleSubmit(result));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <img src={searchIcon} alt="search" />
      <input type="text" placeholder="Search GitHub username..." />
      <input type="submit" value="Search" />
    </form>
  );
};

export default SearchBar;
