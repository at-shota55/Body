import "../scss/start.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { IconContext } from "react-icons";
import { 
    TiSocialTwitter, 
    TiSocialInstagram, 
    TiSocialFacebook,
    TiSocialGithub,
} from "react-icons/ti";
import { GiAbstract002 } from "react-icons/gi"
import { IoBodyOutline } from "react-icons/io5";

// ページ遷移（入り）
const variants = {
    visible: { x: 0, opacity: 1 },
    initHidden: { x: 100, opacity: 0 },
    exitHidden: { x: -100, opacity: 0}
};


// 文字のアニメーション
const item = {
    appear: { opacity: 0, y: "100%"},
    animation: {    
        opacity: 1,
        y: 0,
        transition: {
            duration: 1.5, delay: 0.9, ease: "easeInOut"
        },}
}

// ページ遷移（消える）
const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
        scale: 0.5,
        opacity: 0,
        transition: { ...transition, duration: 1 }
    }
};

function Start() {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={thumbnailVariants}
        >
            <motion.div 
                className="flame"
                animate="visible"
                initial="initHidden"
                exit="exitHidden"
                transition={{
                    duration: 1
                }}
                variants={variants}
            >
                <div className="logo-div">
                    <span><GiAbstract002 />Ats</span>
                </div>
                <div>
                    <motion.h2 
                        className="title"
                        initial="appear"
                        animate="animation"
                        variants={item}
                    >
                        Discover Stretch
                    </motion.h2>
                    <motion.button
                        className="button"
                        animate={{
                            x: 0,
                            opacity: 1,
                            transition: {
                                duration: 1, delay: 1.5, ease: "easeInOut"
                            }
                        }}
                        initial="initHidden"
                        exit="exitHidden"
                        variants={variants}
                        whileHover={{
                            scale: 1.2,
                            transition: { duration: 0.3 }
                        }}
                        whileTap={{ scale: 0.9 }}
                        >
                        <Link 
                            to='/app' 
                            className="button-font"
                        >
                            Cick to Star<IoBodyOutline />
                        </Link>
                    </motion.button>
                </div>
                <motion.div 
                    className="icons"
                    animate="animation"
                    initial="appear"
                    variants={item}
                >
                    <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                        <TiSocialTwitter className="circle"/>
                        <TiSocialInstagram className="circle"/>
                        <TiSocialFacebook className="circle"/>
                        <TiSocialGithub className="circle"/>
                    </IconContext.Provider>
                </motion.div>
            </motion.div>
        </motion.div>
    )
};

export default Start;