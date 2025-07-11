import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> | <Link to="/contacts">Contacts</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      <ThemeToggle />
    </header>
  );
};

export default Header;
