import React from "react";
import PropTypes from "prop-types";

const SimLogin = ({ setUser }) => {
  return (
    <div>
      <button onClick={() => setUser("Eva")}>Eva</button>
      <button onClick={() => setUser("Aude")}>Aude</button>
    </div>
  );
};

SimLogin.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default SimLogin;
