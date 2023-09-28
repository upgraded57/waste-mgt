import "./modal.css";

export default function Modal({ img, title, subtitle, btnText }) {
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__box">
        <img src={img} alt="" />
        <h1 className="h-300">{title}</h1>
        <p>{subtitle}</p>
        <button type="button" className="btn-pry-bg">
          {btnText}
        </button>
      </div>
    </div>
  );
}
