import store from "./app/store";
import { Provider } from "react-redux";
import { QuotesList } from "./assets/components/QuotesList";

function App() {
  return (
    <>
      <Provider store={store}>
        <QuotesList />
      </Provider>
    </>
  );
}

export default App;
