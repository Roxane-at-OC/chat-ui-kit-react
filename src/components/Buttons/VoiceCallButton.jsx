import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export const VoiceCallButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--voicecall`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<LocalPhoneIcon />}
    >
      {children}
    </Button>
  );
};

VoiceCallButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default VoiceCallButton;
