import { NavLink, useNavigate } from "react-router-dom";
import { GoX } from "react-icons/go";
import { IoIosHome } from "react-icons/io";
import { LuChevronRight } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import useSignOut from "../Features/SignOut/useSignOut";
import MiniSpinner from "./MiniSpinner";

function SideBar({ onToggle }) {
  const { mutate: signOut, status } = useSignOut();
  const handleSignOut = function () {
    signOut();
  };
  return (
    <div className="transform duration-1000 transition-transform ease-in-out">
      <div className="grid lg:hidden grid-cols-1 md:w-2/4 w-3/4 bg-slate-900 p-2.5 absolute right-0 top-0 text-slate-200 z-50">
        <GoX
          onClick={onToggle}
          className="h-8 w-8 absolute right-1.5 top-1.5"
        />

        <li className=" my-3 py-3 flex items-center space-x-1">
          <IoIosHome className="w-7 h-7" />
          <NavLink to="/Home">
            <button className="font-medium">Home</button>
          </NavLink>
        </li>
        <span className="uppercase text-center font-medium">Categories</span>

        <ul className="">
          <li className="border-y mt-3 py-3 flex items-center space-x-1">
            <LuChevronRight className="w-7 h-7" />
            <NavLink to="/Clothing">
              <button className="font-medium">Clothing</button>
            </NavLink>
          </li>

          <li className="border-b  py-3 flex items-center space-x-1">
            <LuChevronRight className="w-7 h-7" />
            <NavLink to="/Furnitures">
              <button className="font-medium">Furnitures</button>
            </NavLink>
          </li>

          <li className="border-b  py-3 flex items-center space-x-1">
            <LuChevronRight className="w-7 h-7" />
            <NavLink to="/SmartPhones">
              <button className="font-medium">SmartPhones</button>
            </NavLink>
          </li>

          <li className="border-b  py-3 flex items-center space-x-1">
            <LuChevronRight className="w-7 h-7" />
            <NavLink to="/Jewelries">
              <button className="font-medium">Jewelries</button>
            </NavLink>
          </li>

          <li className="border-b  py-3 flex items-center space-x-1">
            <LuChevronRight className="w-7 h-7" />
            <NavLink to="/Groceries">
              <button className="font-medium">Groceries</button>
            </NavLink>
          </li>
        </ul>

        <button
          onClick={handleSignOut}
          className="py-3 flex items-center space-x-1"
        >
          <CiLogout className="w-7 h-7" />
          <span className="font-medium">
            {status === "pending" ? <MiniSpinner /> : " Logout"}
          </span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
