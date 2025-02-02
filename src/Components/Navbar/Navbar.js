import React, {Component} from "react";
import {MenuItems} from "./MenuItems";
import {Button} from "../Button";
import "./Navbar.css";
import {Link} from "react-router-dom";

class Navbar extends Component {
  state = {clicked: false};

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  };

  render() {
    return (
      <div className="handleournavbar">
        <nav className="NavbarItems">
          <h1 className="navbar-logo"> EASE</h1>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
            ></i>
          </div>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li className="navba-links" key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
          {/* 
          <div className="signin-nav">
            <Link to="/signup">
              <Button>Sign In</Button>
            </Link>
          </div> */}
          <div className="signup-nav">
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </nav>
        {/* <img className="image" src={background} alt="background-image" /> */}
      </div>
    );
  }
}

export default Navbar;
