import "./App.css";
import Home from "./pages/Home";
import TransactionProvider from "./store/TransactionProvider";

function App() {
  return (
    <>
      <TransactionProvider>
        <Home />
      </TransactionProvider>
    </>
  );
}

export default App;
