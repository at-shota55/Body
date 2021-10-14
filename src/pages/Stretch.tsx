import "../scss/background.scss"
import StretchPages from "../components/StretchPages";
import Header from "../components/Header";
function Stretch() {
    return (
        <div>
            <Header />
            <div className="stretch-area" >
                <StretchPages />
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
        </div>
    )
}

export default Stretch;