import React from "react";
import PropTypes from "prop-types";

const UserProfile = (props) => {

  
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1528828271616-f3e6411aaf6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGF5c2FnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{props.user}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
};

UserProfile.propTypes = {
  user: PropTypes.string,
};

export default UserProfile;
