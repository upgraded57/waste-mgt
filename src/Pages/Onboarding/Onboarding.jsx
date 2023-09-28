import "./onboarding.css";
import { useEffect, useState } from "react";

import logo from "../../assets/images/logo.png";
import onboarding1 from "../../assets/images/onboarding1.png";
import onboarding2 from "../../assets/images/onboarding2.png";
import onboarding3 from "../../assets/images/onboarding3.png";

import { FaLongArrowAltRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();
  const [overlay, setOverlay] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOverlay(false);
    }, 2000);
  }, []);

  return (
    <div className="onboarding">
      <div
        className={
          overlay ? "onboarding__overlay" : "onboarding__overlay active"
        }
      >
        <div className="onboarding__overlay-logo">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="onboarding__screens">
        <div className="onboarding__screen">
          <div className="onboarding__screen-overlay"></div>
          <div className="onboarding__screen-content">
            <div className="onboarding__screen-content-img">
              <img src={onboarding1} alt="" />
            </div>
            <div className="onboarding__screen-content-text">
              <h1 className="h-300">Search for a Location</h1>
              <p className="text-body">
                Proident et minim ullamco proident amet laborum proident
                adipisicing laborum ea voluptate consectetur labore.
              </p>
            </div>
          </div>
          <div className="onboarding__action-btns">
            <div className="onboarding__action-btns-dots">
              <span className="active"></span>
              <span></span>
              <span></span>
            </div>
            <div
              className="onboarding__action-btns-skip"
              onClick={() => navigate("/auth")}
            >
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="onboarding__screen">
          <div className="onboarding__screen-overlay"></div>
          <div className="onboarding__screen-content">
            <div className="onboarding__screen-content-img">
              <img src={onboarding2} alt="" />
            </div>
            <div className="onboarding__screen-content-text">
              <h1 className="h-300">Schedule Waste PickUp</h1>
              <p className="text-body">
                Proident et minim ullamco proident amet laborum proident
                adipisicing laborum ea voluptate consectetur labore.
              </p>
            </div>
          </div>
          <div className="onboarding__action-btns">
            <div className="onboarding__action-btns-dots">
              <span></span>
              <span className="active"></span>
              <span></span>
            </div>
            <div
              className="onboarding__action-btns-skip"
              onClick={() => navigate("/auth")}
            >
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="onboarding__screen">
          <div className="onboarding__screen-overlay"></div>
          <div className="onboarding__screen-content">
            <div className="onboarding__screen-content-img">
              <img src={onboarding3} alt="" />
            </div>
            <div className="onboarding__screen-content-text">
              <h1 className="h-300">Contribute to the Earth</h1>
              <p className="text-body">
                Proident et minim ullamco proident amet laborum proident
                adipisicing laborum ea voluptate consectetur labore.
              </p>
            </div>
          </div>
          <div className="onboarding__action-btns">
            <div className="onboarding__action-btns-dots">
              <span></span>
              <span></span>
              <span className="active"></span>
            </div>
            <button className="btn-pry-sm" onClick={() => navigate("/auth")}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
