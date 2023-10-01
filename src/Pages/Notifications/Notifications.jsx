import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import Notification from "./Notification";
import { BsTruck } from "react-icons/bs";
import { CiWallet } from "react-icons/ci";

export default function Notifications() {
  return (
    <>
      <Topbar header="Notifications" />
      <div className="notifications">
        <Notification
          header="Your trash truck has arrived"
          icon={<BsTruck />}
        />
        <Notification header="Payment Verified" icon={<CiWallet />} />
        <Notification
          header="Have you taken your trash out today?"
          icon={<BsTruck />}
        />
        <Notification header="Payment Verified" icon={<CiWallet />} />
      </div>
    </>
  );
}
