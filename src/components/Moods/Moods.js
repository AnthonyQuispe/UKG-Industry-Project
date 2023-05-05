import "./Moods.scss";
import verySatisfied from "../../assets/icons/wonderful.png";
import happy from "../../assets/icons/happy.png";
import neutral from "../../assets/icons/so-so.png";
import unhappy from "../../assets/icons/unhappy.png";
import Chatgpt from "../ChatGpt/Chatgpt";
import { useState } from "react";

const Moods = () => {
    const [showSeciBotModal, setShowCeciBotModal] = useState(false);

    const handleOpenCeciBot = () => {
        setShowCeciBotModal(true);
    };

    return (
        <div className="moods-bar">
            <div className="moods-bar__text">
                <h4>How are you feeling today?</h4>
            </div>
            <div className="moods-bar__icons">
                <img
                    src={verySatisfied}
                    alt="very satisfied face"
                    onClick={() => handleOpenCeciBot()}
                    className="icon-image"
                ></img>
                <img
                    src={happy}
                    alt="happy face"
                    onClick={() => handleOpenCeciBot()}
                    className="icon-image"
                ></img>
                <img
                    src={neutral}
                    alt="neutral face"
                    onClick={() => handleOpenCeciBot()}
                    className="icon-image"
                ></img>
                <img
                    src={unhappy}
                    alt="unhappy face"
                    onClick={() => handleOpenCeciBot()}
                    className="icon-image"
                ></img>
            </div>
            <div>
                {showSeciBotModal && (
                    <Chatgpt setShowCeciBotModal={setShowCeciBotModal} />
                )}
            </div>
        </div>
    );
};

export default Moods;
