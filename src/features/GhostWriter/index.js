import React from "react";
import Typewriter from "typewriter-effect";

const items = [
  "delivers services?",
  "processes data?",
  "ensures equality?",
  "engages with the public?",
  "uses technology?",
];

const getRand = (min = 1000, max = 2000) => Math.random() * (max - min) + min;

const GhostWriter = (props) => {
  return (
    <div className="GhostWriter">
      <h1 className="usa-sr-only">10x Homepage</h1>
      <div className="GhostWriter__content">
        {"What if your idea could change how the government "}
        <Typewriter
          options={{
            loop: false,
            delay: 50,
            wrapperClassName: "GhostWriter__text",
            cursorClassName: "GhostWriter GhostWriter__cursor",
          }}
          onInit={(typewriter) => {
            items.forEach((item, i) => {
              typewriter
                .pauseFor(getRand())
                .typeString(item)
                .pauseFor(getRand());
              if (i + 1 !== items.length) {
                typewriter.deleteAll();
              }
            });

            typewriter.start();
          }}
        />
      </div>
    </div>
  );
};

GhostWriter.propTypes = {};

export default GhostWriter;
