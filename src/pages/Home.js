import React, { useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState("all");
  const [url, setUrl] = useState("https://randomuser.me/api/?results=500");
  let navigate = useNavigate();
  if (localStorage.getItem("logged-in") !== "sucess") {
    navigate("/");
  }
  const handlefemale = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setUrl("https://randomuser.me/api?results=500&gender=female");
    setLoading(true);
    setType("female");
  };
  const handleall = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    setUrl("https://randomuser.me/api?results=500");
    setLoading(true);
    setType("all");
  };
  const handlemale = () => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setUrl("https://randomuser.me/api?results=500&gender=male");
    setLoading(true);
    setType("male");
  };

  const fetchuser = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUser(data.results);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    fetchuser();
  }, [url]);
  return (
    <div className="home">
      <div className="student-data-header">
        <div className="left-home">
          <p>
            Search Student Info Based On Gender Or{" "}
            <span onClick={handleall}>All</span>
          </p>
          <div className="btns">
            <button onClick={handlemale}>Male</button>
            <button onClick={handlefemale}>Female</button>
          </div>
        </div>
        <div className="right">
          <img
            src="https://www.focusacademy.in/images/students_stairs.png"
            alt=""
          />
        </div>
      </div>
      <div className="student-data-blocks">
        {loading ? (
          <div className="loading-component">
            <img src="https://www.focusacademy.in/images/loader.gif" alt="" />
          </div>
        ) : (
          <>
            <h1>information of {type} students</h1>
            <div className="student-all-blocks">
              {user &&
                user.map((user) => (
                  <UserProfile
                    name={user.name.first + " " + user.name.last}
                    location={user.location.country}
                    age={user.dob.age}
                    img={user.picture.large}
                    gender={user.gender}
                    email={user.email}
                    cell={user.cell}
                  />
                ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
