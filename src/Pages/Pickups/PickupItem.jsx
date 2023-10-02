import "./pickups.css";
import mapImg from "../../assets/images/maps.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdOutlineCancel } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function PickupItem() {
  const navigate = useNavigate();
  return (
    <div className="pickup">
      <div className="pickup__map-img">
        <img src={mapImg} alt="" />
      </div>
      <div className="pickup__content">
        <h2>May 20, 2022 2:09pm</h2>
        <div className="pickup__content-desc">
          <p>Small-Size Truck | N600</p>
          <span className="icon">
            <AiOutlineArrowRight />
          </span>
        </div>
      </div>
      <div
        className="pickup__cancel-btn"
        onClick={() => navigate("/pickups/cancel")}
      >
        <MdOutlineCancel />
      </div>
    </div>
  );
}
