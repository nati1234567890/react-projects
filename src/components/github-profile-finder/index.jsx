import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./style.css";
function GithubProfile() {
  const [username, setUsername] = useState("nati1234567890");
  const [userData, setUserData] = useState(null);
  const [loading, setloading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  function handleSubmit() {
    fetchGithubUserData();
  }
  async function fetchGithubUserData() {
    try {
      setloading(true);
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      setloading(false);
      setUserData(data);
      setUsername("");
    } catch (error) {
      console.log(error);
      setloading(false);
    }
  }
  useEffect(() => {
    fetchGithubUserData();
  }, []);
  if (loading) {
    return <div>Loading Please Wait</div>;
  }
  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleSubmit}> Search</button>
      </div>
      {userData !== null ? <Card user={userData} /> : null}
    </div>
  );
}

export default GithubProfile;
