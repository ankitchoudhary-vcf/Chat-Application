import React from "react";
import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import './Header.css';

export const Header = (props) => {


  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    props.setLogout(false);

  };

  const handleBurger = (e) => {
      var navbar = document.querySelector('#'+e.target.dataset.target)
      e.target.classList.toggle('is-active');
      navbar.classList.toggle('is-active');
  }

  return (
    <Navbar
      className="notification is-dark m-0 p-1"
      style={{ borderRadius: "0px" }}
    >
      <Navbar.Brand>
        <Link className="navbar-item" to="/dashboard" style={{ textDecoration: "none" }}>
          <h2 className="has-text-primary title is-4 m-0">Chat Application</h2>
        </Link>
        <Navbar.Burger data-target="navigation" onClick={handleBurger} />
      </Navbar.Brand>

      <Navbar.Menu id="navigation" className="notification is-dark p-0">
        <Navbar.Container align="right">
            <Navbar.Item onClick={handleLogout} id="logout">
              <LogoutOutlined title="Log out" className="m-0 mr-2 p-2" />
            </Navbar.Item>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Header;
