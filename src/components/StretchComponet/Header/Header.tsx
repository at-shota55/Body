import { Link } from "react-router-dom";
import "./header.scss";
import { IoIosArrowBack } from "react-icons/io";

function Header() {
    return (
        <div className="wrapper">
            <div className="img">
                <ul className="bone">
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="header-component">
                <button className="link-button">
                    <Link to="/app" className="link-button-font">
                        <IoIosArrowBack className="arrow"/> Back
                    </Link>
                </button>            
                <h1 className="main-title">Discover Stretch</h1>
                <h2 className="menu">menu</h2>
            </div>
            <h2 className="title">タイトル</h2>
        </div>
    )
};

export default Header;