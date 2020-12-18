import React from "react";
import Typewriter from "typewriter-effect";

const GhostWriter = (props) => {
  return (
    <Typewriter
      options={{
        loop: false,
        wrapperClassName: "GhostWriter",
        cursorClassName: "GhostWriter GhostWriter__cursor",
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString(
            "What if your idea could change how the government communicates with the public?"
          )
          .start();
      }}
    />
  );
};

GhostWriter.propTypes = {};

export default GhostWriter;
