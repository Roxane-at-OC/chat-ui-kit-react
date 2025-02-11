import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import VideocamIcon from "@mui/icons-material/Videocam";

export const VideoCallButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--videocall`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<VideocamIcon />}
    >
      {children}
    </Button>
  );
};

VideoCallButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default VideoCallButton;
