import React, { createRef } from "react";
import { colors } from "./Helpers/palette";
import { GradientButton } from "./components/GradientButton";
import { GradientMenu, GradientMenuItem } from "./components/GradientMenu";
import { sizes } from "./Helpers/sizes";
import { Header } from "./Sections/Header";
import { Bio } from "./Sections/Bio";
import { EmploymentHistory } from "./Sections/EmploymentHistory";
import { Folio } from "./Sections/Folio";

const App = () => {
  const headerRef = createRef<HTMLDivElement>();
  const bioRef = createRef<HTMLDivElement>();
  const expRef = createRef<HTMLDivElement>();
  const folioRef = createRef<HTMLDivElement>();
  const appRef = createRef<HTMLDivElement>();

  return (
    <div className="App" ref={appRef}>
      <header className="App-header">
        <Header ref={headerRef} context={appRef}>
          <GradientMenu>
            <GradientMenuItem
              name="Bio"
              onClick={() => console.log("bio")}
              targetNodeRef={bioRef}
              containerNodeRef={headerRef}
              isActive={false}
            />
            <GradientMenuItem
              name="Experience"
              onClick={() => console.log("exp")}
              targetNodeRef={expRef}
              containerNodeRef={headerRef}
              isActive={false}
            />
            <GradientMenuItem
              name="Portfolio"
              onClick={() => console.log("port")}
              targetNodeRef={folioRef}
              containerNodeRef={headerRef}
              isActive={false}
            />
          </GradientMenu>
        </Header>
        <Bio ref={bioRef}>I'm the bio</Bio>
        <EmploymentHistory ref={expRef}>
          <div>I'm the history</div>
        </EmploymentHistory>
        <Folio ref={folioRef}>
          <div>I'm the folio</div>
        </Folio>
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
};

export default App;
