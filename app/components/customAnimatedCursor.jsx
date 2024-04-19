import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomAnimatedCursor() {
  return (
    <AnimatedCursor
      className="animated-cursor"
      innerSize={8}
      outerSize={8}
      color="255, 255, 255"
      outerAlpha={0.2}
      innerScale={1}
      outerScale={6}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
        {
          target: ".custom",
          options: {
            innerSize: 12,
            outerSize: 12,
            color: "255, 255, 255",
            outerAlpha: 0.3,
            innerScale: 0.7,
            outerScale: 5,
          },
        },
      ]}
      elementStyles={{
        // Définir le curseur par défaut pour les éléments cliquables
        a: { cursor: "default" },
        'input[type="text"]': { cursor: "default" },
        'input[type="email"]': { cursor: "default" },
        'input[type="number"]': { cursor: "default" },
        'input[type="submit"]': { cursor: "default" },
        'input[type="image"]': { cursor: "default" },
        "label[for]": { cursor: "default" },
        select: { cursor: "default" },
        textarea: { cursor: "default" },
        button: { cursor: "default" },
        ".link": { cursor: "default" },
        ".custom": { cursor: "default" },
      }}
    />
  );
}

export default CustomAnimatedCursor;
