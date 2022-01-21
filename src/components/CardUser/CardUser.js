import React from "react";

const CardUser = ({ userData }) => (
  <div>
    <img src={userData.avatar_url} alt="personaje" width={250} />

    <h3>{userData.login}</h3>
    <div>
      <span className="date">{userData.bio}</span>
    </div>
    <h4>{userData.location}</h4>
  </div>
);

export default CardUser;
