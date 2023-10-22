import "./privacy.css";
import Topbar from "./../../Components/Topbar/Topbar";

export default function Privacy() {
  return (
    <>
      <Topbar header="Privacy Policy" />
      <div className="privacy">
        <div className="statement">
          <h3 className="h-100">1. Types of Data We Collect</h3>
          <p className="text-body">
            Lorem Ipsum is a dummy text proident et minim ullamco proident amet
            laborum proident adipisicing laborum ea voluptate consectetur
            labore, proident et minim ullamco proident amet laborum proident
            adipisicing laborum ea voluptate consectetur labore
          </p>
        </div>
        <div className="statement">
          <h3 className="h-100">2. Use of Personal Data</h3>
          <p className="text-body">
            Lorem Ipsum is a dummy text proident et minim ullamco proident amet
            laborum proident adipisicing laborum ea voluptate consectetur
            labore, proident et minim ullamco proident amet laborum proident
            adipisicing laborum ea voluptate consectetur labore
          </p>
        </div>
        <div className="statement">
          <h3 className="h-100">3. Disclosure of Personal Data</h3>
          <p className="text-body">
            Lorem Ipsum is a dummy text proident et minim ullamco proident amet
            laborum proident adipisicing laborum ea voluptate consectetur
            labore, proident et minim ullamco proident amet laborum proident
            adipisicing laborum ea voluptate consectetur labore
          </p>
        </div>
      </div>
    </>
  );
}
