import "./Heading.css";
function Heading() {
  return (
    <div className="heading">
      <div className="left-head">
        <img
          src="images/password gen logo.svg"
          alt="logo"
          className="logo-img"
        />
        <p className="head-txt">
          <span>Blue</span>Vault
        </p>
      </div>
      <div className="right-head">
        <div className="logo-wrapper">
          <p className="spotlight">About</p>
          <img src="images/about logo.svg" alt="about logo" />
        </div>
        <div className="logo-wrapper">
          <p className="spotlight contact-p">Contact</p>
          <img src="images/contact logo.svg" alt="contact logo" />
        </div>
      </div>
    </div>
  );
}
export default Heading;
