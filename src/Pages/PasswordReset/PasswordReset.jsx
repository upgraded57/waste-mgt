import "./passwordreset.css";

import resetImg from "../../assets/images/reset-pass.png";
import successImg from "../../assets/images/success.png";
import { useState } from "react";
import Input from "./../../Components/Input/Input";
import Loader from "../../Components/Loader/Loader";
import Modal from "../../Components/Modal/Modal";

export default function PasswordReset() {
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const changePassword = (e) => {
    e.preventDefault();
    if (password.length > 0 && confirmPassword.length > 0) {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
      } else {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setModalActive(true);
        }, 2000);
      }
    } else {
      alert("Password field cannot be empty");
    }
  };
  return (
    <>
      <div className="passwordreset">
        <h1 className="h-300">Reset Password</h1>
        <img src={resetImg} alt="" />
        <p className="text-body">
          Enter your new pasword below, enter a stronger password.
        </p>
        <form onSubmit={changePassword}>
          <Input
            id="pass"
            placeholder="New Password"
            type="password"
            setValue={setPassword}
          />
          <Input
            id="confirm-pass"
            placeholder="Confirm Password"
            type="password"
            setValue={setConfirmPassword}
          />
          <button
            type="submit"
            className={loading ? "btn-pry-bg btn-disabled" : "btn-pry-bg"}
            disabled={loading}
          >
            Reset Password
            {loading && <Loader type="spinner" />}
          </button>
        </form>
      </div>
      {modalActive && (
        <Modal
          img={successImg}
          title="Successful"
          subtitle="You have sucessfully change password. Always remember your passcode."
          btnText="Next"
          btnLink="/"
        />
      )}
    </>
  );
}
