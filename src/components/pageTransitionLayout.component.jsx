import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PageTransitionLayout = ({ children }) => {
  const navigator = useNavigate();

  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={navigator.pathname}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
