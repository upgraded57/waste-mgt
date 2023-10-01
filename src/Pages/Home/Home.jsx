import "./home.css";
import { HiOutlineBell } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import { BiCurrentLocation } from "react-icons/bi";
import Navbar from "./../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

import mapImg from "../../assets/images/map.jpg";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    if (searchQuery.length > 1) {
      navigate("/search/" + searchQuery);
    }
  };
  return (
    <div className="home">
      <div className="home__topbar">
        <div className="home__topbar-left">
          <h2>Hello, John!</h2>
          <p>Have you taken out your trash today?</p>
        </div>
        <div
          className="home__topbar-right"
          onClick={() => navigate("/notifications")}
        >
          <div className="notif-dot"></div>
          <HiOutlineBell />
        </div>
      </div>

      <div className="home__body">
        <div className="home__body-search">
          <CiSearch className="icon" />
          <form onSubmit={search}>
            <input
              type="text"
              placeholder="Search for nearby centers"
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setSearchOpen(true)}
              onBlur={() => setSearchOpen(false)}
            />
          </form>
        </div>

        <div className="home__body-map">
          <img src={mapImg} alt="" />
        </div>
        <div className="location-dot">
          <BiCurrentLocation />
        </div>
      </div>

      <div
        className={
          searchOpen ? "home__recent-search active" : "home__recent-search"
        }
      >
        <div className="home__recent-search-top">
          <p>Recent</p>
          <span>Clear All</span>
        </div>
        <div className="home__recent-search-list">
          <ul>
            <li>
              Garden City
              <AiOutlineCloseCircle className="icon" />
            </li>
            <li>
              Local center
              <AiOutlineCloseCircle className="icon" />
            </li>
            <li>
              Phc freshness
              <AiOutlineCloseCircle className="icon" />
            </li>
            <li>
              Some city name
              <AiOutlineCloseCircle className="icon" />
            </li>
            <li>
              Port Harcourt
              <AiOutlineCloseCircle className="icon" />
            </li>
          </ul>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
