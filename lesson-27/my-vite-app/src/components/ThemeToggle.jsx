import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button onClick={toggleTheme}>{theme === "light" ? "🌑" : "🌕"}</button>
  );
};

export default ThemeToggle;
