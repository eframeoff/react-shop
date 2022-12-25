import React, { useRef, useState, useCallback } from "react";
import { SearchContext } from "../../App";
import classes from "./Search.module.scss";
import debounce from "lodash.debounce";

const testDeb = debounce(() => {}, 2000);

const Search = () => {
  const findText = useCallback(
    debounce((val) => {
      setSearch(val);
    }, 400),
    []
  );
  const inputRef = useRef();
  const clearAndFocus = () => {
    setSearch("");
    setSer("");
    inputRef.current.focus();
  };
  const { search, setSearch } = React.useContext(SearchContext);
  const [ser, setSer] = useState("");
  const onChangeInp = (e) => {
    setSer(e.target.value);
    findText(e.target.value);
  };
  return (
    <div className={classes.root}>
      <input
        ref={inputRef}
        className={classes.input}
        type="text"
        placeholder="Поиск..."
        value={ser}
        onChange={onChangeInp}
      />
      {search && (
        <div onClick={clearAndFocus} className={classes.close}>
          &times;
        </div>
      )}
    </div>
  );
};

export default Search;
