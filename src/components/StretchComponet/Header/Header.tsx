import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import { IoIosArrowBack } from "react-icons/io";
import { BsArrowDownCircle } from "react-icons/bs";
import { stretchList } from "../StretchMenu/StretchPages";

type Id = {
    part: string,
    body: string
}

function Header() {
    const location = useLocation<Id>();
    const { body } = location.state;
    
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
                <div>
                    <ul className="menu">
                        <li>menu <BsArrowDownCircle className="under-arrow"/>
                            <ul>
                                {stretchList.map(stretch => {
                                    return (
                                        <li>
                                            <Scroll to={stretch.title}>
                                                {stretch.title}
                                            </Scroll>
                                        </li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <h2 className="title">{body}</h2>
        </div>
    )
};

export default Header;