import React, { useCallback, useEffect, useState } from "react";
import UserProfile from "../components/UserProfile";

const users = ["Eva", "Aude", "Anne", "Marc"];
const UserList = () => {
  const [criteria, setCriteria] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [userName, setUserName] = useState("");

  const handleSearch = useCallback((event) => {
    setCriteria(event.target.value);
  }, []);

  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAdd = () => {
    let currentList = filteredUsers;
    currentList.push(userName);
    console.log(filteredUsers);
  };

  useEffect(() => {
    setFilteredUsers(
      users.filter((user) =>
        user.toLowerCase().includes(criteria.toLowerCase())
      )
    );
  }, [criteria]);

  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <div className="container mb-3">
        <div className="row">
          <div className="col-md-2 col-xs-1">
            <input
              type="text"
              className="form-control"
              onChange={handleSearch}
              placeholder="recherche"
            />
          </div>
          <div className="col-md-2 col-xs-1 d-flex">
            <input
              style={{ width: "100%", minWidth: "10rem" }}
              className="form-control"
              type="text"
              placeholder="Nouvel Utilisateur"
              onChange={handleChange}
            />
            <button
              onClick={handleAdd}
              type="submit"
              className="btn btn-primary"
            >
              Créer
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {filteredUsers.map((user, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-xs-6">
              <UserProfile user={user} />
            </div>
          ))}
          <div className="col-lg-3 col-md-4 col-xs-6 mb-3 d-flex justify-content-center align-items-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
