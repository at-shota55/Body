import styled from "styled-components";
import { motion } from "framer-motion";
import Header from "../../components/StretchComponet/Header/Header";
import StretchPages from "../../components/StretchComponet/StretchMenu/StretchPages";
import Footer from "../../components/StretchComponet/Footer/Footer"

// ページ遷移（消える）
const transition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };
const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
        scale: 0.5,
        opacity: 0,
        transition: { ...transition, duration: 1 }
    }
};

function Stretch() {
    return (
        <motion.div
            initial="initial"
            animate="enter"
            exit="exit"
            variants={thumbnailVariants}
        >
            <Wrapper>
                <Header />
                <StretchPages />
                <Footer />
            </Wrapper>
        </motion.div>
    )
}

const Wrapper = styled.div`
    height: auto;
    background-color: #CBD7ED;
`

export default Stretch;