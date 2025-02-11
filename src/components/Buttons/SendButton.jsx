import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import SendIcon from "@mui/icons-material/Send";

export const SendButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--send`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<SendIcon />}
    >
      {children}
    </Button>
  );
};

SendButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default SendButton;
