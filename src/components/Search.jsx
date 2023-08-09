import React, { useState } from "react";
import { fetchPosts } from "../store/actions/weatherActions";
import { useDispatch } from "react-redux";

export default function Search() {
  const [inputVal, setInputVal] = useState("Baku");
  const dispatch = useDispatch();

  const sendRequest = () => {
    dispatch(fetchPosts(inputVal));
  };

  return (
    <div className="search-box">
      <input
        className="search-box--input"
        type="text"
        placeholder="search "
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
      />
      <button className="search-box--btn" onClick={sendRequest}>
        Search
      </button>
    </div>
  );
}
