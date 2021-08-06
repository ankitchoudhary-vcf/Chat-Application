import React from "react";
import "bulma/css/bulma.min.css";
import { Navbar } from "react-bulma-components";
import { LogoutOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const Header = (props) => {


  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.removeItem("username");
    localStorage.removeItem("password");

    props.setLogout(false);

  };

  return (
    <Navbar
      className="notification is-dark m-0 p-1"
      style={{ borderRadius: "0px" }}
    >
      <Navbar.Brand>
        <Link className="navbar-item" to="/dashboard" style={{ textDecoration: "none" }}>
          <h2 className="has-text-primary title is-4 m-0">Chat Application</h2>
        </Link>
        <Navbar.Burger />
      </Navbar.Brand>

      <Navbar.Menu>
        <Navbar.Container align="right">
            <Link to="/Login" onClick={handleLogout}>
              <LogoutOutlined title="Log out" className="m-0 mr-2 p-2" />
            </Link>
        </Navbar.Container>
      </Navbar.Menu>
    </Navbar>
  );
};

export default Header;
