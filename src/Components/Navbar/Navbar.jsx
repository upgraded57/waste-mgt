import "./navbar.css";

import { GoHome } from "react-icons/go";
import { RxCalendar } from "react-icons/rx";
import { SlTrash } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__nav">
        <GoHome className="icon-sm" />
        <span>Home</span>
      </div>
      <div className="navbar__nav">
        <RxCalendar className="icon-sm" />
        <span>Schedule</span>
      </div>
      <div className="navbar__nav">
        <SlTrash className="icon-sm" />
        <span>Pickups</span>
      </div>
      <div className="navbar__nav">
        <AiOutlineUser className="icon-sm" />
        <span>Account</span>
      </div>
    </div>
  );
}
