import "./cancelpickup.css";
import Topbar from "./../../Components/Topbar/Topbar";
import Modal from "../../Components/Modal/Modal";
import cancelPickupImg from "../../assets/images/sad-face.png";
import { useState } from "react";
import Loader from "../../Components/Loader/Loader";

export default function CancelPickup() {
  const [loading, setLoading] = useState(false);
  const [cancelModalActive, setCancelModalActive] = useState(false);

  const submitCancelPickupRequest = () => {
    setLoading(true);
    setTimeout(() => {
      setCancelModalActive(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Topbar header="Cancel Pickup" />
      <div className="cancelpickup">
        <div className="cancelpickup__header">
          Please select the reason for cancellation
        </div>

        <div className="cancelpickup__options">
          <span>
            <input type="checkbox" id="option1" />
            <label htmlFor="option1">Waiting for a long time</label>
          </span>
          <span>
            <input type="checkbox" id="option2" />
            <label htmlFor="option2">Unable to reach out the driver</label>
          </span>
          <span>
            <input type="checkbox" id="option3" />
            <label htmlFor="option3">Driver denied to go to destination</label>
          </span>
          <span>
            <input type="checkbox" id="option4" />
            <label htmlFor="option4">Wrong address shown</label>
          </span>
          <span>
            <input type="checkbox" id="option5" />
            <label htmlFor="option5">The price is not reasonable</label>
          </span>
          <span>
            <input type="checkbox" id="option6" />
            <label htmlFor="option6">The price is not reasonable</label>
          </span>

          <div className="cancelpickup__options-other">
            <label htmlFor="other">Other</label>
            <input type="text" id="other" placeholder="Other reason"></input>
          </div>
        </div>
      </div>

      <div className="cancelpickup__submit-btn">
        <button
          type="button"
          className="btn-pry-bg"
          onClick={submitCancelPickupRequest}
        >
          Submit
          {loading && <Loader type="spinner" />}
        </button>
      </div>

      {cancelModalActive && (
        <Modal
          img={cancelPickupImg}
          title="We're so sad about your cancellation"
          subtitle="We will continue to improve our service  satisfy you on the next order."
          btnText="Okay"
          btnLink="/pickups"
        />
      )}
    </>
  );
}
