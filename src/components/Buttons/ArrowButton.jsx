import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";

import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const ArrowButton = ({
  className = "",
  direction = "right",
  children,
  ...rest
}) => {
  const cName = `${prefix}-button--arrow`;

  const icon = (() => {
    if (direction === "up") {
      return <ArrowUpwardIcon />;
    } else if (direction === "right") {
      return <ArrowForwardIcon />;
    } else if (direction === "down") {
      return <ArrowDownwardIcon />;
    } else if (direction === "left") {
      return <ArrowBackIcon />;
    }
  })();

  return (
    <Button {...rest} className={classNames(cName, className)} icon={icon}>
      {children}
    </Button>
  );
};

ArrowButton.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  direction: PropTypes.oneOf(["up", "right", "down", "left"]),
};

export default ArrowButton;
