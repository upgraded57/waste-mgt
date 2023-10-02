import "./navbar.css";

import { GoHome } from "react-icons/go";
import { RxCalendar } from "react-icons/rx";
import { SlTrash } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div
        className={
          location.pathname === "/" ? "navbar__nav active" : "navbar__nav"
        }
        onClick={() => navigate("/")}
      >
        <GoHome className="icon-sm" />
        <span>Home</span>
      </div>
      <div
        className={
          location.pathname === "/schedule"
            ? "navbar__nav active"
            : "navbar__nav"
        }
        // onClick={() => navigate("/schedule")}
      >
        <RxCalendar className="icon-sm" />
        <span>Schedule</span>
      </div>
      <div
        className={
          location.pathname === "/pickups"
            ? "navbar__nav active"
            : "navbar__nav"
        }
        onClick={() => navigate("/pickups")}
      >
        <SlTrash className="icon-sm" />
        <span>Pickups</span>
      </div>
      <div
        className={
          location.pathname === "/account"
            ? "navbar__nav active"
            : "navbar__nav"
        }
        onClick={() => navigate("/account")}
      >
        <AiOutlineUser className="icon-sm" />
        <span>Account</span>
      </div>
    </div>
  );
}
