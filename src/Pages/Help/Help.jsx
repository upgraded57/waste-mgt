import Topbar from "../../Components/Topbar/Topbar";
import "./help.css";
import "../Pickups/pickups.css";
import { BsFillTriangleFill, BsTwitter, BsInstagram } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { useNavigate } from "react-router-dom";

export default function Help() {
  const navigate = useNavigate();
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

  const showContent = (e) => {
    e.target.parentElement.classList.toggle("active");
  };
  return (
    <>
      <Topbar header="Help Center" />
      <div className="pickups">
        <div className="pickups__nav">
          <span className="active schedule" onClick={screenLeft}>
            FAQs
          </span>
          <span onClick={screenRight} className="past">
            Contact Us
          </span>
        </div>
        <div className="pickups__container">
          <div className="pickups__screens">
            <div className="pickups__screen">
              <div className="drop-down">
                <div className="drop-down__header" onClick={showContent}>
                  <h3>What is DustBin?</h3>
                  <span>
                    <BsFillTriangleFill />
                  </span>
                </div>
                <hr />
                <div className="drop-down__content">
                  <p className="text-body">
                    Lorem Ipsum is a dummy text proident et minim ullamco
                    proident amet laborum
                  </p>
                </div>
              </div>

              <div className="drop-down">
                <div className="drop-down__header" onClick={showContent}>
                  <h3>Is DustBin app free to use?</h3>
                  <span>
                    <BsFillTriangleFill />
                  </span>
                </div>
                <hr />
                <div className="drop-down__content">
                  <p className="text-body">
                    Lorem Ipsum is a dummy text proident et minim ullamco
                    proident amet laborum
                  </p>
                </div>
              </div>

              <div className="drop-down">
                <div className="drop-down__header" onClick={showContent}>
                  <h3>How do I make a request on DustBin?</h3>
                  <span>
                    <BsFillTriangleFill />
                  </span>
                </div>
                <hr />
                <div className="drop-down__content">
                  <p className="text-body">
                    Lorem Ipsum is a dummy text proident et minim ullamco
                    proident amet laborum
                  </p>
                </div>
              </div>

              <div className="drop-down">
                <div className="drop-down__header" onClick={showContent}>
                  <h3>Is DustBin app free to use?</h3>
                  <span>
                    <BsFillTriangleFill />
                  </span>
                </div>
                <hr />
                <div className="drop-down__content">
                  <p className="text-body">
                    Lorem Ipsum is a dummy text proident et minim ullamco
                    proident amet laborum
                  </p>
                </div>
              </div>

              <div className="drop-down">
                <div className="drop-down__header" onClick={showContent}>
                  <h3>How do I make a request on DustBin?</h3>
                  <span>
                    <BsFillTriangleFill />
                  </span>
                </div>
                <hr />
                <div className="drop-down__content">
                  <p className="text-body">
                    Lorem Ipsum is a dummy text proident et minim ullamco
                    proident amet laborum
                  </p>
                </div>
              </div>
            </div>
            <div className="pickups__screen">
              <div
                className="contact"
                onClick={() => navigate("/customer-service")}
              >
                <span>
                  <RiCustomerService2Line />
                </span>
                <p className="text-body">Customer Service</p>
              </div>
              <div className="contact">
                <span>
                  <TfiWorld />
                </span>
                <p className="text-body">Website</p>
              </div>
              <div className="contact">
                <span>
                  <BsTwitter />
                </span>
                <p className="text-body">Twitter</p>
              </div>
              <div className="contact">
                <span>
                  <BsInstagram />
                </span>
                <p className="text-body">Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
