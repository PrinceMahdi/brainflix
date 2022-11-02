import "./Header.scss";
import logo from "../../assets/images/BrainFlix-logo.svg";
import avatar from "../../assets/images/Mohan-muruge.jpg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header__logo-container">
          <a className="header__logo-link" href="../../App.js">
            <img src={logo} alt="BrainFlix Logo"></img>
          </a>
        </div>
        <div className="header__info-container">
          <div className="header__search-container">
            <div className="header__search-icon"></div>
            <input className="header__search-box" placeholder="Search"></input>
            <img
              className="header__avatar"
              src={avatar}
              alt="Moham Muruge Avatar"
            ></img>
          </div>
          <div className="header__upload-container">
            <div className="header__upload-icon"></div>
            <button className="header__upload-button">UPLOAD</button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
