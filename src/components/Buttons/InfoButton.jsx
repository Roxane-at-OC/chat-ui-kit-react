import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import InfoIcon from "@mui/icons-material/Info";

export const InfoButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--info`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<InfoIcon />}
    >
      {children}
    </Button>
  );
};

InfoButton.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default InfoButton;
