import "./Moods.scss";
import verySatisfied from "../../assets/icons/wonderful.png";
import happy from "../../assets/icons/happy.png";
import neutral from "../../assets/icons/so-so.png";
import unhappy from "../../assets/icons/unhappy.png";
import Chatgpt from "../ChatGpt/Chatgpt";
import { useState } from "react";
import { motion } from "framer-motion";

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
        <motion.img
          src={verySatisfied}
          alt="very satisfied face"
          onClick={() => handleOpenCeciBot()}
          className="icon-image"
          animate={{
            scale: [1, 1.4, 1.4, 1.4, 1],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            rotate: [0, 0, 360, 360, 0],
          }}
          transition={{
            duration: 4
          }}
        />
        <motion.img
          src={happy}
          alt="happy face"
          onClick={() => handleOpenCeciBot()}
          className="icon-image"
          animate={{
            scale:[1,1.4,1.4,1.4,1],
            borderRadius: ['20%',"20%","50%","50%","20%"],
            rotate: [0, 0, 360, 360, 0]
          }}
          transition={{
            duration: 5
          }}
        />
        <motion.img
          src={neutral}
          alt="neutral face"
          onClick={() => handleOpenCeciBot()}
          className="icon-image"
          animate={{
            scale:[1,1.4,1.4,1.4,1],
            borderRadius: ['20%',"20%","50%","50%","20%"],
            rotate: [0, 0, 360, 360, 0]
          }}
          transition={{
            duration: 4
          }}
        />
        <motion.img
          src={unhappy}
          alt="unhappy face"
          onClick={() => handleOpenCeciBot()}
          className="icon-image"
          animate={{
            scale:[1,1.4,1.4,1.4,1],
            borderRadius: ['20%',"20%","50%","50%","20%"],
            rotate: [0, 0, 360, 360, 0]
          }}
          transition={{
            duration: 5
          }}
        />
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
