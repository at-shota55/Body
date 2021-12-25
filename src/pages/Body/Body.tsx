import { useState } from "react";
import { motion } from "framer-motion";
import "./body.scss";
import { GiAbstract002 } from "react-icons/gi";
import { 
  AiOutlineHome, 
  AiOutlineQuestionCircle, 
  AiOutlineCloseCircle
} from "react-icons/ai";
import Body from "../../components/BodyComponent/Load";
import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";
import Modal from "react-modal";
import { Button } from "@material-ui/core";

interface Prop {
  goToStretch: ({part, body} : {part: string, body: string}) => void
}

const customStyles = {
  overlay : {
    backgroundColor: "rgba(0, 0, 0, 0.7)"
  },
  content : {
    padding : "1em",
    top : '50%',
    left : '50%',
    right : 'auto',
    bottom : 'auto',
    marginRight : '-50%',
    transform : "translate(-50%, -50%)",
    color : "white",
    backgroundColor: "rgba(202, 217, 238, 0.9)"
  }
};  

const MainApp: React.FC<Prop> = (props) => {
  const { goToStretch } = props;
  const [modalIsOpen,setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  };
  function closeModal(){
    setIsOpen(false);
  };

  return (
    <div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="area"
      >
          <div className="logo-div">
            <span><GiAbstract002 />DcS</span>
          </div>
          <Button 
            variant="outlined"
            className="menu" 
            size="large" 
            endIcon={<AiOutlineQuestionCircle />}
            color="inherit"
            onClick={openModal}
          >
            使い方
          </Button>
          <Modal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal}
            style={customStyles}
          >
            <Button 
              className="close-btn" 
              style={{
                width : "100%", 
                float : "right",
                padding : "1em"
              }}
              color="inherit"
              onClick={closeModal}
            >
              <AiOutlineCloseCircle />
            </Button>
            <p>気になる部分をタップしてね！</p>
          </Modal>

          <Body goToStretch={({part, body} : {part: string, body: string}) => goToStretch({part, body})}/>
          
          <div className="btn-component">
            <button className="btn" data-tip data-for="home">
              <Link to="/">
                <AiOutlineHome />
              </Link>
              <ReactTooltip 
                id="home" 
                place="top" 
                type="info" 
                effect="solid" 
                backgroundColor="rgba( 242, 220, 233,1)" 
                arrowColor="transparent" 
              >
                <p>HOME</p>
              </ReactTooltip>
            </button>
          </div>
      </motion.div>
    </div>
  )
};

export default MainApp;