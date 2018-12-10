import React from "react";

const MatchWrapper = WrappedComponent => (props) => {
  const {show, percentage } = props;
  let type = "";
  switch (true) {
    case percentage > 75:
      type = "succes";
      break;
    case percentage > 50 && 75 >= percentage:
      type = "mediocore";
      break;
    case percentage <= 50:
      type = "failure123";
      break;
  }

  return show && <WrappedComponent {...props, type} />
}

export default MatchWrapper;