import React from "react";

const MatchWrapper = WrappedComponent => (props) => {
  const {show, percentage } = props;
  let type = "";
  switch (true) {
    case percentage > 75:
      type = "succes";
      break;
    case percentage > 50 && 75 >= percentage:
      type = "mediocre";
      break;
    case percentage <= 50:
      type = "failure123";
      break;
  }

  return show && <WrappedComponent {...props} type={type} />
}

export default MatchWrapper;