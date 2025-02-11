import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import FilePresentIcon from "@mui/icons-material/FilePresent";

export const AttachmentButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--attachment`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<FilePresentIcon />}
    >
      {children}
    </Button>
  );
};

AttachmentButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default AttachmentButton;
