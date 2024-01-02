import React, { useEffect, useState } from "react";
import data from "../accoridian/data";
import { FaSadCry } from "react-icons/fa";
import Suggestions from "./suggestions";

function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropDown, setShowDropdown] = useState(false);
  const [filterdUsers, setFilterdUsers] = useState([]);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (query.length > 1) {
      const filtedData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilterdUsers(filtedData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      if (data && data.users && data.users.length) {
        setUsers(data.users.map((item) => item.firstName));
        setError(null);
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(e);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);
  console.log(users, filterdUsers);
  if (loading) {
    return <div>Loading Please Wait</div>;
  }
  function handleClick(e) {
    setShowDropdown(false);
    setSearchParam(e.target.innerText);
    setFilterdUsers([]);
  }
  return (
    <div
      className="container"
      style={{ display: "flex", flexDirection: "column" }}
    >
      <input
        onChange={handleChange}
        value={searchParam}
        name="search-users"
        placeholder="Search users here"
      />
      {showDropDown && (
        <Suggestions handleClick={handleClick} data={filterdUsers} />
      )}
    </div>
  );
}

export default SearchAutoComplete;
