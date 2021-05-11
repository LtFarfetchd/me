import React from "react";
import { colors } from "./Helpers/palette";
import { GradientButton } from "./components/GradientButton";
import { sizes } from "./Helpers/sizes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GradientButton
          gradientColorOne={colors.primaryColor}
          gradientColorTwo={colors.secondaryColor}
          gradientBorderSize={sizes.borderSize}
          onClick={() => console.log("yup")}
          unhoveredTextColor={colors.generalWhite}
          hoveredTextColor={colors.generalWhite}
          buttonColor={colors.generalBlack}
        >
          This is a long button
        </GradientButton>
      </header>
    </div>
  );
}

export default App;
