import React from "react";
import { colors } from "./Helpers/palette";
import { GradientButton } from "./components/GradientButton";
import { GradientMenu, GradientMenuItem } from "./components/GradientMenu";
import { sizes } from "./Helpers/sizes";
import { Menu, MenuItem, Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GradientMenu>
          <GradientMenuItem name="Bio" />
          <GradientMenuItem name="Experience" />
          <GradientMenuItem name="Portfolio" />
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
        <Segment inverted>
          <Menu inverted secondary>
            <MenuItem name="testOne" />
            <MenuItem name="testTwo" />
          </Menu>
        </Segment>
      </header>
    </div>
  );
}

export default App;
