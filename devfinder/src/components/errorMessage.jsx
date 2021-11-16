import React from "react";
import cancelBlack from "../images/cancel-black.png";

const ErrorMessage = () => {
  return (
    <section>
      <img src={cancelBlack} alt="cancel" />
      <h3>Sorry</h3>
      <p>Github User does not exist. Cross-check the name and try again.</p>
    </section>
  );
};

export default ErrorMessage;
