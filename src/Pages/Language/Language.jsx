import Topbar from "../../Components/Topbar/Topbar";
import "./language.css";

export default function Language() {
  return (
    <>
      <Topbar header="Language" />
      <div className="language">
        <div className="language__options suggestion">
          <h2 className="h-200">Suggested</h2>
          <div className="language__option">
            <label className="text-body" htmlFor="en-us">
              English (US)
            </label>
            <input type="radio" name="language" id="en-us" defaultChecked />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="en-uk">
              English (UK)
            </label>
            <input type="radio" name="language" id="en-uk" />
          </div>
        </div>
        <div className="language__options">
          <div className="language__option">
            <label className="text-body" htmlFor="esp">
              Spanish
            </label>
            <input type="radio" name="language" id="esp" />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="hin">
              Hindi
            </label>
            <input type="radio" name="language" id="hin" />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="rss">
              Russia
            </label>
            <input type="radio" name="language" id="rss" />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="bng">
              Bengali
            </label>
            <input type="radio" name="language" id="bng" />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="swe">
              Swedish
            </label>
            <input type="radio" name="language" id="swe" />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="pt">
              Portuguese
            </label>
            <input type="radio" name="language" id="pt" />
          </div>
          <div className="language__option">
            <label className="text-body" htmlFor="dut">
              Dutch
            </label>
            <input type="radio" name="language" id="dut" />
          </div>
        </div>
      </div>
    </>
  );
}
