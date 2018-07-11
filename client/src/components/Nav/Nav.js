import React from "react";
import "./Nav.css";
import AboutModal from "../../components/AboutModal";
import SignInModal from "../../components/SignInModal";
import LogInModal from "../../components/LogInModal";
import LogOutButton from "../../components/LogOutButton";

const Background = "darkness.png";
const style = {
  backgroundImage: `url(${Background})`
};

const Nav = (props) => (
  <nav style={style} className="navbar">
    <div className="container-fluid">
      <div className="navbar-header">
        <a className="navbar-brand" href="/">
          BandBase
        </a>
      </div>
    <ul className="nav navbar-nav navbar-right">
    <li><AboutModal/></li>
      {!props.loggedIn && 
        <li><SignInModal/></li>
      }
      {!props.loggedIn &&
        <li><LogInModal  _login={props._login} loggedIn={props.loggedIn}/></li>
      }
      {props.loggedIn && 
          <li>Welcome {props.currentUser}</li>
      }
      {props.loggedIn && 
          <li><LogOutButton/></li>
      }



    </ul>
    </div>
</nav>
);

export default Nav;
