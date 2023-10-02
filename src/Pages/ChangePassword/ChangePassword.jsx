import { useState } from "react";
import Topbar from "../../Components/Topbar/Topbar";
import "./changepassword.css";
import Input from "../../Components/Input/Input";
import Loader from "../../Components/Loader/Loader";

import successImg from "../../assets/images/success.png";
import Modal from "../../Components/Modal/Modal";

export default function ChangePassword() {
  const [loading, setLoading] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [oldpass, setOldpass] = useState("");
  const [newpass, setNewpass] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const updatePassword = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setModalActive(true);
      setLoading(false);
    }, 2000);
  };
  return (
    <>
      <Topbar header="Change Password" />
      <div className="changepassword">
        <form onSubmit={updatePassword}>
          <Input
            type="password"
            placeholder="Old Password"
            id="oldpass"
            setValue={setOldpass}
          />
          <Input
            type="password"
            placeholder="New Password"
            id="newpass"
            setValue={setNewpass}
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            id="confirmpass"
            setValue={setConfirmpass}
          />
          <button type="submit" className="btn-pry-bg">
            Save
            {loading && <Loader type="spinner" />}
          </button>
        </form>
      </div>
      {modalActive && (
        <Modal
          img={successImg}
          title="Success!"
          subtitle="Your password has been changed successfully"
          btnText="Next"
          btnLink="/account"
        />
      )}
    </>
  );
}
