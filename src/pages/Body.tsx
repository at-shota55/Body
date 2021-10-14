import { motion } from "framer-motion";
import "../scss/body.scss";
import { GiAbstract002 } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import Body from "../components/Load";
import { Link, withRouter } from "react-router-dom";

function MainApp() {
  return (
    <div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="area"
      >
          <div className="logo-div">
            <span><GiAbstract002 />Ats</span>
          </div>
          <motion.div>
            <ul className="menu">
              <li>
                <a>使い方</a>
                <ul>
                  <li>
                    <a>気になるところをタップしてね！</a>
                  </li>
                </ul>
              </li>
            </ul>
          </motion.div>
          <Body></Body>
          <div className="btn-component">
            <button className="btn">
              <Link to="/">
                <AiOutlineHome />
              </Link>
            </button>
          </div>
      </motion.div>
    </div>
  )
};


export default MainApp;