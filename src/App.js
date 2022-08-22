import GlobalStyles from "./styles/Global";
import Home from "./views/Home";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Home />
    </BrowserRouter>
  );
}

export default App;
