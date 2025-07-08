import { useState } from "react";
import "./MainContent.css";
function MainContent() {
  const [isMouseOver, setMouseOver] = useState(false);
  function handleMouseOver() {
    setMouseOver(true);
  }
  function handleMouseLeave() {
    setMouseOver(false);
  }
  return (
    <div className="main-content">
      <div className="card">
        <p className="card-head-txt">Password Generator</p>
        <div className="password-div">
          <input type="text" readOnly value="jothijeya437t64" />
          <img
            src="images/copy icon.svg"
            alt="copy icon"
            className="copy-img"
            title="Copy"
          />
        </div>
        <div className="total-level">
          <div className="selected-level"></div>
        </div>
        <div className="pass-len-div">
          <p>Password Length</p>
          <p>12</p>
        </div>
        <div className="checkbox-div">
          <div>
            <label>Include Lowercase Letter (a-z)</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Include Uppercase Letter (A-Z)</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Include Numbers (0-9)</label>
            <input type="checkbox" />
          </div>
          <div>
            <label>Include Symbols (@-*)</label>
            <input type="checkbox" />
          </div>
        </div>
        <div className="generate-btn-div">
          <button onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
            <img
              src={
                isMouseOver
                  ? "images/magic icon white.svg"
                  : "images/magic icon.svg"
              }
              alt="magic icon"
              className="magic-img"
            />
            Generate Password
          </button>
        </div>
      </div>
    </div>
  );
}
export default MainContent;
