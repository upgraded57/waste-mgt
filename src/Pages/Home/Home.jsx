import "./home.css";
import logo from "../../../public/images/logo.png";

export default function Home() {
  return (
    <div className="home">
      <div className="home__logo">
        <img src={logo} alt="" />
      </div>
    </div>
  );
}
