import { AiFillHome } from "react-icons/ai";
import { FiPlusSquare } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function MobileNav() {
  return (
    <div className="fixed bottom-0 right-0 w-full bg-white border-t z-10">
      <ul className=" h-16 flex items-center justify-center gap-8">
        <li>
          <Link to="">
            <AiFillHome className="w-6 h-6 hover:scale-110 hover:text-stone-700 transition" />
          </Link>
        </li>
        <li>
          <Link to="">
            <IoSearch className="w-6 h-6 hover:scale-110 hover:text-stone-700 transition" />
          </Link>
        </li>
        <li>
          <Link to="">
            <FiPlusSquare className="w-6 h-6 hover:scale-110 hover:text-stone-700 transition" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <Avatar
              url="https://miro.medium.com/v2/resize:fit:495/0*xFuo_UNWchLZ8bqS.jpeg"
              alt="me"
              h="6"
              w="6"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileNav;
