import store from "./app/store";
import { Provider } from "react-redux";
import styled from "styled-components";
import { QuotesList } from "./assets/components/QuotesList";
import { NavBar } from "./assets/components/NavBar";

function App() {
  return (
    <>
      <Provider store={store}>
        <BodyDiv>
          <NavBar />
          <QuotesList />
        </BodyDiv>
      </Provider>
    </>
  );
}

const BodyDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  padding-top: 5rem;
  gap: 2rem;
`;

export default App;
