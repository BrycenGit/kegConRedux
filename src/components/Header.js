import React from "react";
import {Navbar} from "react-bootstrap"


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