import "./editaccount.css";
import Topbar from "./../../Components/Topbar/Topbar";
import { useState } from "react";

import userImg from "../../assets/images/user-image.jpg";
import successImg from "../../assets/images/success.png";
import { HiOutlineCamera } from "react-icons/hi";
import Input from "../../Components/Input/Input";
import Loader from "../../Components/Loader/Loader";
import Modal from "../../Components/Modal/Modal";

export default function EditAccount() {
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const updateUserProfile = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setModalActive(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Topbar header="Edit Profile" />
      <div className="editaccount">
        <div className="editaccount__avatar">
          <div className="editaccount__avatar-img">
            <img src={userImg} alt="" />
          </div>
          <span className="camera-icon">
            <HiOutlineCamera />
          </span>
        </div>

        <div className="editaccount__details">
          <h2 className="h-200">Details</h2>
          <form onSubmit={updateUserProfile}>
            <Input
              placeholder="Full Name"
              id="fullname"
              type="text"
              setValue={setFullname}
            />
            <Input
              placeholder="Email Address"
              id="email"
              type="email"
              setValue={setEmail}
            />
            <Input
              placeholder="Phone Number"
              id="phone"
              type="text"
              setValue={setPhone}
            />
            <Input
              placeholder="Residential Address"
              id="address"
              setValue={setAddress}
            />
            <button type="submit" className="btn-pry-bg">
              Save
              {loading && <Loader type="spinner" />}
            </button>
          </form>
        </div>
      </div>
      {modalActive && (
        <Modal
          img={successImg}
          title="Success!"
          subtitle="Your profile information has been updated successfully"
          btnText="Next"
          btnLink="/account"
        />
      )}
    </>
  );
}
