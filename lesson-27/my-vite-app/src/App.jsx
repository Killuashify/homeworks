import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { useTheme } from "./context/ThemeContext";

const App = () => {
  const { theme } = useTheme();

  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<h2>404: Not Found</h2>} />
          </Routes>
        </main>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
