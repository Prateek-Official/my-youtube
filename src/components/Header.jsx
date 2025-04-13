import { toggleMenu } from "../utils/appSlice";
import { addQuery } from "../utils/searchSlice";
import {
  HAMBURGER_LOGO,
  YOUTUBE_LOGO,
  USER_ICON,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const selector = useSelector((store) => store.search);

  useEffect(() => {
    // make an API call after every keypress
    // but if the difference between the 2 keystrokes is < 200ms
    // decline the API call
    // DEBOUNCING

    const timer = setTimeout(() => {
      if (selector[searchQuery]) {
        setSuggestions(selector[searchQuery]);
      } else {
        getQuerySuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getQuerySuggestions = async () => {
    // console.log("API call..." ,searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    dispatch(
      addQuery({
        [searchQuery]: json[1],
      })
    );
    setSuggestions(json[1]);
  };

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-md py-4 grid-cols-12 fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex items-center gap-2 col-span-2 pl-4">
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

      <div className="col-span-8">
        <div className="flex items-center justify-center">
          <div className="border border-gray-400 w-1/2 rounded-l-full flex items-center">
            <input
              type="text"
              className="px-6 py-2 w-full rounded-l-full outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={() => setShowSuggestions(false)}
            />
            {searchQuery !== "" ? (
              <span
                className="mr-1 px-2 text-lg text-gray-700 cursor-pointer"
                onClick={() => setSearchQuery("")}
              >
                x
              </span>
            ) : null}
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded-r-full border border-gray-400 text-[16px]">
            🔍
          </button>
        </div>

        {suggestions.length > 0 && showSuggestions ? (
          <div className="bg-white fixed mx-60 w-[490px] rounded-lg shadow-xl border border-gray-200">
            <ul className="">
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-2 px-2 mt-2 hover:bg-gray-100 cursor-default"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="col-span-2 flex items-center justify-center">
        <img src={USER_ICON} alt="user-icon" className="h-8" />
      </div>
    </div>
  );
}

export default Header;
