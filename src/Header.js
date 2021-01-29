import React, { Component } from "react";
import logo from "./assets/logo/riot-logo.png";
import vlogo from "./assets/logo/valorant-logo.png";
import "./Header.css";
import {BrowserRouter as Route, Redirect, Router, Switch} from 'react-router-dom';
import Login from './Login'


class Header extends Component {
  handleClick = () => {
        return <Switch> <Redirect to="login"/> </Switch>
 }
  render() {
    return (
      <header className="header">
        <div className="left-content">
          <img
            src={logo}
            style={{
              width: "45px",
              paddingRight: "14px",
              borderRight: "2px solid #7E7E7E",
            }}
            alt="logo"
          />
          <img
            src={vlogo}
            style={{ width: "90px", marginLeft: "15px" }}
            alt="vlogo"
          />
        </div>

        <div className="navbar-list">
          <ul>
            <li>
              <a href="/" target="_blank">
                GAME INFO
              </a>
            </li>
            <li>MEDIA</li>
            <li>NEWS</li>
            <li>LEADERBOARD</li>
            <li>SUPPORT</li>
            <li>
              <a href="/login">OUR SOCIAL</a>
            </li>
          </ul>
        </div>
        <div>
          <span style={{color: "white", marginRight: "30px", fontSize: "20px"}}>
        <i class="fa fa-globe"/>
        </span>
          <button className="btn-play" onClick={this.handleClick}>PLAY NOW</button>
        </div>
      </header>
    );
  }
}

export default Header;
