import "./loader.css";

export default function Loader({ type }) {
  switch (type) {
    case "placeholder":
      return <span className="loader-placeholder"></span>;
    case "spinner":
      return <span className="loader-spinner"></span>;

    default:
      return <span className="loader"></span>;
  }
}
