import React from "react";
import Typewriter from "typewriter-effect";
import { personalData } from "@/utils/data/personal-data";

function customTypeWriter() {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .typeString("Bonjour,")
          .typeString("<br />")
          .typeString("Je suis ")
          .typeString(
            '<span class="text-pink-500">' + personalData.name + "</span>, "
          )
          .pauseFor(500)
          .typeString("développeur web et mobile ")
          .typeString(
            '<span class="text-[#16f2b3]">' + "passionné" + "</span>."
          )
          .pauseFor(600)
          .deleteChars(10)
          .typeString(
            '<span class="text-[#16f2b3]">' + "compétent" + "</span>."
          )
          .pauseFor(600)
          .deleteChars(10)
          .typeString(
            '<span class="text-[#16f2b3]">' +
              personalData.designation +
              "</span>."
          )
          .pauseFor(600)
          .start();
      }}
      options={{
        autoStart: true,
        loop: false,
        delay: 50,
        deleteSpeed: 10,
        pauseFor: 1500,
      }}
      className="text-[#16f2b3]"
    />
  );
}

export default customTypeWriter;
