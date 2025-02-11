import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { prefix } from "../settings";
import Button from "./Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

export const AddUserButton = ({ className = "", children, ...rest }) => {
  const cName = `${prefix}-button--adduser`;

  return (
    <Button
      {...rest}
      className={classNames(cName, className)}
      icon={<PersonAddIcon />}
    >
      {children}
    </Button>
  );
};

AddUserButton.propTypes = {
  /**
   * Primary content.
   */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
};

export default AddUserButton;
