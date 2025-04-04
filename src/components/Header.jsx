import { toggleMenu } from "../utils/appSlice";
import {
  HAMBURGER_LOGO,
  YOUTUBE_LOGO,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // 

    // make an API call after every keypress
    // but if the difference between the 2 keystrokes is < 200ms
    // decline the API call
    const timer = setTimeout(() => getQuerySuggestions(), 2000);

    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery]);

  const getQuerySuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-md py-4">
      <div className="flex items-center gap-2 col-span-1 justify-center">
        <img
          src={HAMBURGER_LOGO}
          alt="hamburger icon"
          className="h-8 ml-2 cursor-pointer"
          onClick={handleToggleMenu}
        />

        <a href="/">
          <img src={YOUTUBE_LOGO} alt="youtube-logo" className="h-14" />
        </a>
      </div>

      <div className="col-span-10 flex items-center justify-center">
        <input
          type="text"
          className="border border-gray-400 w-1/2 px-4 py-2 rounded-l-full"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="bg-gray-200 px-4 py-2 rounded-r-full border border-gray-400 text-[16px]">
          🔍
        </button>
      </div>

      <div className="col-span-1 flex items-center justify-center">
        <img src={USER_ICON} alt="user-icon" className="h-8" />
      </div>
    </div>
  );
}

export default Header;
