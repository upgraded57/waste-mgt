import { useNavigate } from "react-router-dom";
import "./modal.css";

export default function Modal({ img, title, subtitle, btnText, btnLink }) {
  const navigate = useNavigate();
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__box">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <p>{subtitle}</p>
        {btnText && (
          <button
            type="button"
            className="btn-pry-bg"
            onClick={() => btnLink && navigate(btnLink)}
          >
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
}
