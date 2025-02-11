import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export const EllipsisButton = ({
  className = "",
  orientation = "horizontal",
  children,
  ...rest
}) => {
  const cName = `${prefix}-button--ellipsis`;

  const icon =
    orientation === "vertical" ? <MoreVertIcon /> : <MoreHorizIcon />;

  return (
    <Button {...rest} className={classNames(cName, className)} icon={icon}>
      {children}
    </Button>
  );
};

EllipsisButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  orientation: PropTypes.oneOf(["horizontal", "vertical"]),
};

export default EllipsisButton;
