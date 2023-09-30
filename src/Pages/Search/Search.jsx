import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import "./search.css";
import { ImLocation } from "react-icons/im";
import mapImg from "../../assets/images/map.jpg";
import { HiArrowNarrowLeft } from "react-icons/hi";

export default function Search() {
  const { search_query } = useParams();
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const search = (e) => {
    e.preventDefault();
    if (searchQuery.length > 0) {
      navigate("/search/" + searchQuery);
    }
  };

  return (
    <div className="search">
      <div className="search__top">
        <img src={mapImg} alt="" />
      </div>

      <div className="search__back-icon" onClick={() => navigate(-1)}>
        <HiArrowNarrowLeft />
      </div>

      <div className="search__city">
        <h1 className="h-300">{search_query}</h1>
        <p className="text-body">
          Proident et minim ullamco proident amet laborum proident ea voluptate
          consectetur. Proident et minim ullamco proident amet laborum proident
          ea voluptate consectetur.{" "}
        </p>
        <div className="search__city-location">
          <ImLocation className="icon" />
          <h3>Oyingbo Port Harcourt</h3>
        </div>
        <button type="button" className="btn-pry-bg">
          Schedule Pickup
        </button>
      </div>
    </div>
  );
}
