import React, { Component } from "react";
import logo from "./assets/logo/riot-logo.png";
import vlogo from "./assets/logo/valorant-logo.png";
import "./Header.css";
import {
  BrowserRouter as Route,
  Redirect,
  Router,
  Switch,
} from "react-router-dom";
import Login from "./Login";

class Header extends Component {
  state = {clicked: false}

  handleClick= () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    return (
      <header className="header">
          {/* <img
            src={logo}
            style={{
              width: "45px",
              paddingRight: "14px",
              borderRight: "2px solid #7E7E7E",
            }}
            alt="logo"
          /> */}
          <img
            src={vlogo}
            style={{ width: "90px", marginLeft: "20px", justifySelf: "start" }}
            alt="vlogo"
          />
          <div style={{display: "flex"}}>
          <ul className={this.state.clicked ? "navbar-list active" : "navbar-list"}>
            <li>
              <a href="/">GAME INFO</a>
            </li>
            <li>MEDIA</li>
            <li>NEWS</li>
            <li>LEADERBOARD</li>
            <li>SUPPORT</li>
            <li>
              <a href="/login">OUR SOCIAL</a>
            </li>
          </ul>
          {/* <span
            style={{ color: "white", marginRight: "30px", fontSize: "20px" }}
          >
            <i class="fas fa-globe" />
          </span>
          <button className="btn-play">
            PLAY NOW
          </button> */}
          <div className="menu-bar" onClick={this.handleClick}>
            <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"} />
          </div>
          </div>
      </header>
    );
  }
}

export default Header;
