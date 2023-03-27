import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Header = (props) => {
  const login = props.user ? (
    <span> Bienvenue {props.user} !</span>
  ) : (
    <span>Connectez-vous</span>
  );

  return (
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-md">
        <div className="container-fluid">
          <div className="navbar-brand text-light" href="/">
            <img
              src={logo}
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top mt-1"
            />
            MOOC React
          </div>
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active text-light">
                Utilisateurs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/counter" className="nav-link text-light">
                Compteur
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link text-light">
                Connexion
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/roles" className="nav-link text-light">
                Rôles
              </Link>
            </li>
          </ul>
          <div className="navbar-text text-light">{login}</div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  user: PropTypes.string,
};

export default Header;
