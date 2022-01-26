import { Routes } from "./routes";
import GlobalStyle from "./styles/global";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Toaster position="top-right" reverseOrder={false} />
        <Routes />
        <GlobalStyle />
      </header>
    </div>
  );
}

export default App;
