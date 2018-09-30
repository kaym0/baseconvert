import React, { Component } from "react";
import {
  Navbar,
  NavbarGroup,
  NavbarDivider,
  NavbarHeading,
  Button
} from "@blueprintjs/core";
import { Link } from 'react-router-dom';
import "./index.css";

class AppNavbar extends Component {
  render() {
    return (
      <Navbar>
        <NavbarGroup>
          <NavbarHeading>Conversions</NavbarHeading>
          <NavbarDivider />
          <Link to="/decimal"><Button minimal>Decimal</Button></Link>
          <Link to="/binary"><Button minimal>Binary</Button></Link>
          <Link to="/octal"><Button minimal>Octal</Button></Link>
          <Link to="/hexidecimal"><Button minimal>Hexidecimal</Button></Link>
        </NavbarGroup>
      </Navbar>
    );
  }
}


export default AppNavbar;