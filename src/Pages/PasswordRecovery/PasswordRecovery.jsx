import { useState } from "react";
import "./passwordrecovery.css";

import recoveryImg from "../../assets/images/forgot-pass.png";
import mailImg from "../../assets/images/mail.png";

import Input from "./../../Components/Input/Input";
import Modal from "./../../Components/Modal/Modal";
import Loader from "../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";

export default function PasswordRecovery() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [recoveryMail, setRecoveryMail] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const sendRecoveryMail = (e) => {
    e.preventDefault();
    if (!recoveryMail.includes("@")) {
      alert("Please enter a valid email address");
    } else {
      setLoading(true);
      console.log("clicked");

      setTimeout(() => {
        setLoading(false);
        setModalActive(true);
      }, 2000);

      setTimeout(() => {
        navigate("/password/reset");
      }, 4000);
    }
  };
  return (
    <>
      <div className="passwordrecovery">
        <h1 className="h-300">Forgot Password?</h1>
        <img src={recoveryImg} alt="" />
        <p className="text-body">
          To reset your password, please input your email below
        </p>
        <form onSubmit={sendRecoveryMail}>
          <Input
            id="password_recovery"
            placeholder="Email Address"
            type="email"
            setValue={setRecoveryMail}
          />

          <button
            type="submit"
            className={loading ? "btn-pry-bg btn-disabled" : "btn-pry-bg"}
            disabled={loading}
          >
            Send
            {loading && <Loader type="spinner" />}
          </button>
        </form>
      </div>
      {modalActive && (
        <Modal
          img={mailImg}
          title="Check your mail!"
          subtitle={`We just sent a verification link to ${recoveryMail}. Click on the link to continue.`}
        />
      )}
    </>
  );
}
