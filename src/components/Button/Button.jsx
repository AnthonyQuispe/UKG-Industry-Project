import "./Button.scss";
import { motion } from "framer-motion";

function Button() {
  return (
    <>
      <motion.button
        className="button"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 1.1 }}
      >
        <h4 className="button__content">Sign In</h4>
      </motion.button>
    </>
  );
}

export default Button;
