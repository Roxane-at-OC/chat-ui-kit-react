import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import StarIcon from "@mui/icons-material/Star";

export const StarButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--star`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<StarIcon />}
    >
      {children}
    </Button>
  );
};

StarButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default StarButton;
