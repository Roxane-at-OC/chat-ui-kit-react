import React from "react";
import cName from "./cName";
import classNames from "classnames";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PropTypes from "prop-types";

export const ConversationOperations = ({
  children,
  className,
  visible,
  ...rest
}) => (
  <div
    {...rest}
    className={classNames(
      `${cName}__operations`,
      { [`${cName}__operations--visible`]: visible },
      className
    )}
  >
    {React.Children.count(children) > 0 ? children : <MoreVertIcon />}
  </div>
);

ConversationOperations.displayName = "Conversation.Operations";

ConversationOperations.propTypes = {
  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** Always visible not only on hover */
  visible: PropTypes.bool,
};

export default ConversationOperations;
