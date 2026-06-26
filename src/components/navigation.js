function Navigation({
  view,
  setView,
  darkMode,
  setDarkMode,
}) {
  return (
    <nav>
      <button onClick={() => setView("dashboard")}>
        Dashboard
      </button>

      <button onClick={() => setView("about")}>
        About
      </button>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
}

export default Navigation;