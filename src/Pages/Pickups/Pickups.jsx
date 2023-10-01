import "./pickups.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Topbar from "./../../Components/Topbar/Topbar";
import PickupItem from "./PickupItem";

import historyImg from "../../assets/images/note.png";

export default function Pickups() {
  const screenLeft = (e) => {
    document.querySelector(".pickups__screens").style.left = "0";
    const past = document.querySelector(".past");
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    }
    if (past.classList.contains("active")) {
      past.classList.remove("active");
    }
  };

  const screenRight = (e) => {
    document.querySelector(".pickups__screens").style.left = "-100%";
    if (!e.target.classList.contains("active")) {
      e.target.classList.add("active");
    }
    const schedule = document.querySelector(".schedule");
    if (schedule.classList.contains("active")) {
      schedule.classList.remove("active");
    }
  };
  return (
    <>
      <Topbar header="Pickups" />
      <div className="pickups">
        <div className="pickups__nav">
          <span className="active schedule" onClick={screenLeft}>
            Schedule Pickups
          </span>
          <span onClick={screenRight} className="past">
            Past Pickups
          </span>
        </div>
        <div className="pickups__container">
          <div className="pickups__screens">
            <div className="pickups__screen">
              <PickupItem />
              <PickupItem />
              <PickupItem />
              <PickupItem />
            </div>
            <div className="pickups__screen">
              <div className="pickups__screen-history">
                <img src={historyImg} alt="" />
                <h2 className="h-200">No History yet</h2>
                <p className="text-body">
                  You don’t have any active pickups history yet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
