import logo from "./logo.svg";
import "./App.css";
import LanguagsProvider from "./Component/LanguagsProvider";
import Header from "./Component/Header";
import Translate from "./Component/Translate";
import React from "react";

export const LanguagesContext = React.createContext();

export default function App() {
  return (
    <div className="App">
      <LanguagsProvider>
        <div>
          <Header />
          <Translate
            dictionary={{
              DE: "Hallo Welt!",
              US: "Hello World!",
              TR: "Selam Dünya!",
              IR: "سلام دنیا!",
              FR: "Bonjour le monde!",
              SP: "Hola Mundo!",
              DU: "Hallo Wereld!",
            }}
          />
        </div>
      </LanguagsProvider>
    </div>
  );
}
