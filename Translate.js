import React, { useState } from "react";
import { LanguagesContext } from "../App";

const Translate = (props) => {
  return (
    <div>
      <LanguagesContext.Consumer>
        {({ lang }) => {
          return (
            <div>
              <h1>{props.dictionary[lang]}</h1>
            </div>
          );
        }}
      </LanguagesContext.Consumer>
    </div>
  );
};

export default Translate;
