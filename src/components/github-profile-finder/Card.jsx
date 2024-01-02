import React from "react";

function Card({ user }) {
  const {
    created_at,
    avatar_url,
    followers,
    following,
    public_repos,
    name,
    login,
    bio,
  } = user;
  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}> {name || login}</a>
      </div>
      <p>
        {` User Joined on ${createdDate.getDate()}
        ${createdDate.toLocaleString("en-us", { month: "short" })}
        ${createdDate.getFullYear()} `}
      </p>
      <div>
        <div>
          <p>Public Repos</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following</p>
          <p>{following}</p>
        </div>
        <div>
          <p>{bio !== "" ? bio : null}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
