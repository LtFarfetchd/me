import React from "react";
import { colors } from "./Helpers/palette";
import { GradientButton } from "./components/GradientButton";
import { GradientMenu, GradientMenuItem } from "./components/GradientMenu";
import { sizes } from "./Helpers/sizes";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GradientMenu>
          <GradientMenuItem name="Bio" onClick={() => console.log("bio")} />
          <GradientMenuItem
            name="Experience"
            onClick={() => console.log("exp")}
          />
          <GradientMenuItem
            name="Portfolio"
            onClick={() => console.log("port")}
          />
        </GradientMenu>
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
