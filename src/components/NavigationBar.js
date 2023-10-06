import React, { Component } from "react";
import { FaCircle } from "react-icons/fa";

const url = window.location.pathname;
export class NavigationBar extends Component {
  render() {
    return (
      <>
        <h1>Marcus Ebanks</h1>
        <p className="personnalLabel">Computer Programmer & Frontend Developer</p>
        <nav>
          <ol>
            <li>
              { url.trim() ==="/" ? <FaCircle className="navIcon"/>: <a className="link" href="/">Home</a>}
            </li>
            <li className="nav">
              {url === "/About" ? <FaCircle className="navIcon"/> : <a href="/About">About Me</a>}
            </li>
            <li className="nav">
              {url === "/Projects" ? <FaCircle className="navIcon"/> : <a href="/Projects">Projects</a>}
            </li>
            <li className="nav">
              {url === "/Contacts" ? <FaCircle className="navIcon"/> : <a href="/Contacts">Contact</a>}
            </li>
          </ol>
        </nav>
      </>
    );
  }
}

export default NavigationBar;
