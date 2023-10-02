import { useNavigate } from "react-router-dom";
import Topbar from "../../Components/Topbar/Topbar";
import "./payment.css";
import { FcGoogle } from "react-icons/fc";
import { SiVisa, SiMastercard } from "react-icons/si";

export default function Payment() {
  const navigate = useNavigate();
  return (
    <>
      <Topbar header="Payment" />
      <div className="payments">
        <div className="payment">
          <div className="payment__left">
            <div className="payment__left-icon">
              <FcGoogle />
            </div>
            <span>Google Pay</span>
          </div>
          <div className="payment__right">Connected</div>
        </div>
        <div className="payment">
          <div className="payment__left">
            <div className="payment__left-icon">
              <SiVisa />
            </div>
            <span>**** **** **** 9823</span>
          </div>
          <div className="payment__right">Connected</div>
        </div>
        <div className="payment">
          <div className="payment__left">
            <div className="payment__left-icon">
              <SiMastercard />
            </div>
            <span>**** **** **** 4879</span>
          </div>
          <div className="payment__right">Connected</div>
        </div>
        <div className="payment-btn">
          <button
            type="button"
            className="btn-pry-bg"
            onClick={() => navigate("/account/cards/new")}
          >
            Add New Card
          </button>
        </div>
      </div>
    </>
  );
}
