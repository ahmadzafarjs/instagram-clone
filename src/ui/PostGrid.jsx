import { motion } from "framer-motion";
import { IoMdHeart } from "react-icons/io";
function PostGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      }}
      className="relative max-w-[281px] max-h-[281px] overflow-hidden z-110	"
    >
      <div>
        <img
          className="w-[281px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8Is32eDB7jelAHrsyXXYbDmjASW5cRnEWYaY84hqb_A&s"
          alt="grid"
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-stone-900 opacity-0 hover:opacity-50 transition cursor-pointer">
        <IoMdHeart className="text-white z-100 opacity-100" />
        <span className="text-white text-sm">23k </span>
      </div>
    </motion.div>
  );
}

export default PostGrid;
