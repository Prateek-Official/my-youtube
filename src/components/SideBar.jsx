import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function SideBar() {
  const menuDisplay = useSelector((store) => store.app.isMenuOpenFlag);

  // this is known as Early Return
  if (!menuDisplay) {
    return null;
  }

  return menuDisplay === false ? null : (
    <div className="w-48 shadow-xl p-4">
      <ul className="flex flex-col gap-0.5">
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr className="my-4 border-gray-300" />

      <h1 className="font-bold mb-4">You&nbsp;&nbsp;{">"}</h1>
      <ul className="flex flex-col gap-0.5">
        <li>History</li>
        <li>Playlists</li>
        <li>Your Videos</li>
        <li>Watch later</li>
        <li>Liked Videos</li>
      </ul>
      <hr className="my-4 border-white" />
    </div>
  );
}

export default SideBar;
