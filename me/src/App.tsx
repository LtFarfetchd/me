import React from "react";
import { Button } from "semantic-ui-react";
import { GradientButton } from "./components/Button";
import styled from "styled-components";

const StyledSemanticButton = styled(Button).attrs({ color: "blue" })`
  width: 40rem;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GradientButton
          colorOne="blue"
          colorTwo="orange"
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
