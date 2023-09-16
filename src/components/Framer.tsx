import { motion } from "framer-motion";

const Framer = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-52 h-52 bg-primary rounded-3xl"
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.8 }}
      ></motion.div>
    </div>
  );
};

export default Framer;
