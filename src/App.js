import { BrowserRouter as Router } from "react-router-dom";
import { AppContextProvider } from "./contexts/AppContext";
import { Routes } from "./components";

const App = () => {
  return (
    <AppContextProvider>
      <Router>
        <Routes />
      </Router>
    </AppContextProvider>
  );
};

export default App;
