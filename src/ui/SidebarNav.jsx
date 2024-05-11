import { IoLogoJavascript } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FiPlusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

function SidebarNav() {
  return (
    <aside className="fixed bg-white border-r border-stone-400 transition w-20 h-full z-10">
      <div className="flex flex-col items-center gap-12 pt-12">
        {/* Logo */}
        <div>
          <span>
            <Link to="/">
              <IoLogoJavascript className="w-6 h-6 hover:scale-110 hover:text-stone-700 transition " />
            </Link>
          </span>
        </div>
        {/* Navigation Icons */}
        <div>
          <ul className="flex flex-col gap-6">
            <li>
              <Link to="/">
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
      </div>
    </aside>
  );
}

export default SidebarNav;
