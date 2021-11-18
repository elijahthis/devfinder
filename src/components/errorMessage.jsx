import React from "react";
import cancelBlack from "../images/cancel-black.png";
import cancelWhite from "../images/cancel-white.png";

const ErrorMessage = (props) => {
  return (
    <div className="error-box">
      <h3>Sorry</h3>
      <p>Github User does not exist. Cross-check the name and try again.</p>
      <img src={props.themeInd ? cancelBlack : cancelWhite} alt="cancel" />
    </div>
  );
};

export default ErrorMessage;
