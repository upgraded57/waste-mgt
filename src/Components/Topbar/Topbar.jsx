import { useNavigate } from "react-router-dom";
import "./topbar.css";
import { BsArrowLeft } from "react-icons/bs";

export default function Topbar({ header }) {
  const navigate = useNavigate();
  return (
    <div className="topbar">
      <div className="topbar__back-icon" onClick={() => navigate(-1)}>
        <BsArrowLeft className="icon-sm" />
      </div>
      <h1 className="h-300">{header}</h1>
    </div>
  );
}
