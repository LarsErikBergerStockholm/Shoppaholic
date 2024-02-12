import { Alert } from "react-bootstrap";

import React from "react";

const Message = ({ variant, children, text }) => {
  return <Alert variant={variant}>{text}</Alert>;
};

Message.defaultProps = {
  variant: "info",
};

export default Message;
