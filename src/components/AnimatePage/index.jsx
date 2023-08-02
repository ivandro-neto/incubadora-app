import { motion } from "framer-motion";
const animations = {
  initial: { opacity: 1, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 1, y: 1000 },
};
export const AnimatePage = ({ children }) => {
  return (
    <motion.div
      variants={animations}
      initial={"initial"}
      animate={"animate"}
      exit={"exit"}
    >
      {children}
    </motion.div>
  );
};
