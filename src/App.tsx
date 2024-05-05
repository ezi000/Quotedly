import styled from "styled-components";
import { QuotesList } from "./assets/components/QuotesList";
import { NavBar } from "./assets/components/NavBar";
import { Description } from "./assets/components/Description";
function App() {
  return (
    <>
      <BodyDiv>
        <NavBar />
        <Description />
        <QuotesList />
      </BodyDiv>
    </>
  );
}

const BodyDiv = styled.div`
  display: flex;
  margin: 0;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  padding: 5rem 0 3rem 0;
  gap: 2rem;
`;

export default App;
