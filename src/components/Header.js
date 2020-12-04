import React from "react";
import {Navbar, Nav, Form, FormControl, Button} from "react-bootstrap"
import PropTypes from "prop-types"

function Header(props) {

  return(
    <>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Keg'o</Navbar.Brand>
    </Navbar>
    </>
  )
}

export default Header;