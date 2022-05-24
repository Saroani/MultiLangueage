import React, { useState } from "react";
import { LanguagesContext } from "../App";

const Header = (props) => {
  return (
    <div>
      <LanguagesContext.Consumer>
        {({ UpdaitLang }) => {
          return (
            <header>
              <p>please select your langueage : </p>
              <select onChange={UpdaitLang}>
                <option value="DE">🇩🇪 German</option>
                <option value="US">🇺🇸 English</option>
                <option value="TR">🇹🇷 Turkish</option>
                <option value="IR">🇮🇷 Persian</option>
                <option value="FR">🇫🇷 French</option>
                <option value="SP">🇪🇸 Spanish</option>
                <option value="DU">🇳🇱 Dutch</option>
              </select>
            </header>
          );
        }}
      </LanguagesContext.Consumer>
    </div>
  );
};

export default Header;
