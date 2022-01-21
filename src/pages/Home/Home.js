import React, { useState } from "react";
import "./Home.css";
import axios from "axios";
import CardUser from "../../components/CardUser/CardUser";

const Home = () => {
  const [value, setValue] = useState("");
  const [userData, setUserData] = useState({});

  const onChangeValue = (e) => {
    setValue(e.target.value);
  };

  const onSubmitButton = (e) => {
    e.preventDefault();
    const userInput = value.toLowerCase().replace(/ /g, "");
    //console.log(userInput);

    if (userInput) {
      axios(`https://api.github.com/users/${userInput}`).then((res) =>
        setUserData(res.data)
      );
    }
  };

  return (
    <div className="Home">
      <h1>Welcome Home</h1>
      <form onSubmit={onSubmitButton}>
        <input
          placeholder="Buscar Talento..."
          onChange={onChangeValue}
          value={value}
        />
        <button className="boton">Buscar</button>
        <CardUser userData={userData} />
      </form>
    </div>
  );
};

export default Home;
