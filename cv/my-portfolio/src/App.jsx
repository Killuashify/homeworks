import React, { useRef } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import Swapi from "./pages/Swapi";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/transitions.scss";

function AppContent() {
  const location = useLocation();
  const nodeRef = useRef(null);

  return (
    <>
      <Header />
      <main style={{ minHeight: "70vh", padding: "20px" }}>
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames="page"
            timeout={300}
            nodeRef={nodeRef}
          >
            <div ref={nodeRef}>
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/todo" element={<Todo />} />
                <Route path="/swapi" element={<Swapi />} />
              </Routes>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
