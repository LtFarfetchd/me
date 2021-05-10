import React from "react";
import { colors } from "./Helpers/palette";
import { GradientButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GradientButton
          colorOne={colors.primaryColor}
          colorTwo={colors.secondaryColor}
          borderSize="0.175rem"
          onClick={() => console.log("yup")}
        >
          This is a long button
        </GradientButton>
      </header>
    </div>
  );
}

export default App;
