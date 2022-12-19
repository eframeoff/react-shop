import React from "react";
import classes from "./Search.module.scss";

const Search = ({ search, setSearch }) => {
  return (
    <div className={classes.root}>
      <input
        className={classes.input}
        type="text"
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <div onClick={() => setSearch("")} className={classes.close}>
          &times;
        </div>
      )}
    </div>
  );
};

export default Search;
