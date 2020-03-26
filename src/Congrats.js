import React from "react";
import PropTypes from "prop-types";

const Congrats = props => {
  if (props.success) {
    return (
      <div testID="component-congrats">
        <span testID="congrats-message">
          Congratulations! You guessed the word!
        </span>
      </div>
    );
  } else {
    return <div testID="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
