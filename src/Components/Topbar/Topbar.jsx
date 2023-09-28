import { useNavigate } from "react-router-dom";
import "./topbar.css";
import { BsArrowLeft } from "react-icons/bs";

export default function Topbar({ header }) {
  // const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="topbar__back-icon">
        <BsArrowLeft className="icon-sm" />
      </div>
      <h1 className="h-300">{header}</h1>
    </div>
  );
}
