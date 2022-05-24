import React, { useState } from "react";
import { LanguagesContext } from "../App";

const LanguagsProvider = (props) => {
  const [lang, setLang] = useState("DE");
  const UpTodate = (e) => {
    return setLang(e.target.value);
  };
  return (
    <div>
      <LanguagesContext.Provider value={{ lang: lang, UpdaitLang: UpTodate }}>
        {props.children}
      </LanguagesContext.Provider>
    </div>
  );
};

export default LanguagsProvider;
