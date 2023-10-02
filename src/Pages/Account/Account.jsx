import "./account.css";
import Navbar from "./../../Components/Navbar/Navbar";
import Topbar from "./../../Components/Topbar/Topbar";
import userImg from "../../assets/images/user-image.jpg";
import { AiOutlineRight, AiOutlineUser } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import {
  BsChatQuote,
  BsCreditCard,
  BsLock,
  BsShieldCheck,
  BsShieldExclamation,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();
  return (
    <>
      <Topbar header="Profile" />
      <div className="account">
        <div className="account__top">
          <div className="account__top-avatar">
            <img src={userImg} alt="" />
          </div>
          <h2 className="h-200">John Doe</h2>
          <p>johndoe768@gmail.com</p>
        </div>

        <div className="account__navs">
          <div
            className="account__nav"
            onClick={() => navigate("/account/edit")}
          >
            <div className="account__nav-left">
              <AiOutlineUser className="icon" />
              <p>My Profile</p>
            </div>
            <div className="account__nav-right">
              <AiOutlineRight className="icon" />
            </div>
          </div>
          <div
            className="account__nav"
            onClick={() => navigate("/account/cards")}
          >
            <div className="account__nav-left">
              <BsCreditCard className="icon" />
              <p>Payment</p>
            </div>
            <div className="account__nav-right">
              <AiOutlineRight className="icon" />
            </div>
          </div>
          <div
            className="account__nav"
            onClick={() => navigate("/account/language")}
          >
            <div className="account__nav-left">
              <BsShieldExclamation className="icon" />
              <p>Language</p>
            </div>
            <div className="account__nav-right">
              <p>English (US)</p>
              <AiOutlineRight className="icon" />
            </div>
          </div>
          <div className="account__nav">
            <div className="account__nav-left">
              <BsChatQuote className="icon" />
              <p>Help Center</p>
            </div>
            <div className="account__nav-right">
              <AiOutlineRight className="icon" />
            </div>
          </div>
          <div
            className="account__nav"
            onClick={() => navigate("/account/password")}
          >
            <div className="account__nav-left">
              <BsLock className="icon" />
              <p>Change Password</p>
            </div>
            <div className="account__nav-right">
              <AiOutlineRight className="icon" />
            </div>
          </div>
          <div className="account__nav">
            <div className="account__nav-left">
              <BsShieldCheck className="icon" />
              <p>Privacy Policy</p>
            </div>
            <div className="account__nav-right">
              <AiOutlineRight className="icon" />
            </div>
          </div>
          <div className="account__nav logout">
            <div className="account__nav-left">
              <FiLogOut className="icon" />
              <p>Logout</p>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </>
  );
}
