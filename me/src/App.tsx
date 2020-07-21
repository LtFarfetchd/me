import React from "react";
import { Button } from "semantic-ui-react";
import styled from "styled-components";

const StyledSemanticButton = styled(Button).attrs({ color: "blue" })`
  width: 40rem;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <StyledSemanticButton>This is a sem ui button</StyledSemanticButton>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
