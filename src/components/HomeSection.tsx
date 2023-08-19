import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="w-fit my-auto">
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="rounded-md w-fit mx-auto my-4"
      >
        <Link to="/pagination">
          <h1 className="text-5xl bg-secondary p-4">Pagination</h1>
        </Link>
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="rounded-md w-fit mx-auto my-4"
      >
        <Link to="/progress-bar">
          <h1 className="text-5xl bg-secondary p-4">Progress bar</h1>
        </Link>
      </motion.div>
      <motion.div
        animate={{ x: 100 }}
        transition={{ ease: "easeOut", duration: 0.5 }}
        className="rounded-md w-fit mx-auto my-4"
      >
        <Link to="/pagination-query">
          <h1 className="text-5xl bg-secondary p-4">
            Pagination using react query
          </h1>
        </Link>
      </motion.div>
    </div>
  );
};

export default HomeSection;
