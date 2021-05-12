import React from "react";
import { colors } from "./Helpers/palette";
import { GradientButton } from "./components/GradientButton";
import { GradientMenuItem } from "./components/GradientMenu";
import { sizes } from "./Helpers/sizes";
import { Menu, Segment } from "semantic-ui-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Segment inverted>
          <Menu inverted secondary defaultActiveIndex="home">
            <GradientMenuItem name="Bio" active={false} />
            <GradientMenuItem name="Experience" active={true} />
            <GradientMenuItem name="Portfolio" active={false} />
          </Menu>
        </Segment>
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
