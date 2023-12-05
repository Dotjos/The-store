import { IoCartOutline } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useState } from "react";
import useSearch from "../Features/Search/useSearch";
import { VscColorMode } from "react-icons/vsc";

function NavBar({ toggleSideBar }) {
  const [query, setQuery] = useState("");
  const { refetch } = useSearch(query);
  const navigate = useNavigate();
  const [modeOpen, setModeOpen] = useState(false);
  const cartLength = useSelector((state) => state.cart.products.length);

  async function searchOnClick() {
    query ? navigate(`/Search/${query}`) : "";
    await refetch();
  }
  const handleKeyPress = async (e) => {
    if (e.key === "Enter") {
      await searchOnClick();
    }
  };
  function toggleMode() {
    setModeOpen((open) => !open);
  }

  return (
    <div className="flex border-b justify-between p-2 ">
      <div className="flex gap-2 lg:order-1">
        <span
          className="font-italianno font-bold mt-auto mb-auto"
          onClick={() => navigate("/home")}
        >
          The store
        </span>
      </div>

      <div className="  w-2/4 relative lg:order-2 rounded-md outline-none">
        <label htmlFor="search" className="sr-only">
          Search here
        </label>
        <input
          id="search"
          name="search"
          placeholder="Search here"
          className="w-full border rounded-xl  px-1.5 py-0.5 md:px-2 md:py-1 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-600"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          onKeyDown={handleKeyPress}
        />
        <div
          className="absolute right-0 px-1 py-1.5 md:px-2 md:py-2  top-0 border  bg-slate-200 roun roun rounded-r-md"
          onClick={searchOnClick}
        >
          <CiSearch className="w-4 h-4" />
        </div>
      </div>

      <div className="flex  lg:order-3 space-x-1.5 md:space-x-4">
        <div className="p-1.5 relative" onClick={() => navigate("/cart")}>
          <span className="absolute bg-slate-200 px-1 py-0.5 rounded-md text-xs right-0 top-0">
            {cartLength}
          </span>
          <IoCartOutline className="h-full w-5 md:w-7" />
        </div>

        <HiOutlineMenu
          className=" h-full w-5 lg:hidden"
          onClick={toggleSideBar}
        />
      </div>
    </div>
  );
}

export default NavBar;
