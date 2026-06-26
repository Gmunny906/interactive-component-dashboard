import { useState } from "react";
import "./App.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";
import DashboardView from "./views/DashboardView";
import AboutView from "./views/AboutView";

function App() {
  // Controls which view is displayed
  const [view, setView] = useState("dashboard");

  // Controls light/dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Stores the help desk tickets
  const [tickets, setTickets] = useState([
    {
      id: 1,
      title: "Reset Student Password",
      priority: "High",
      technician: "Alice",
      status: "Open",
    },
    {
      id: 2,
      title: "Install Microsoft Office",
      priority: "Medium",
      technician: "Bob",
      status: "Closed",
    },
  ]);

  // Adds a new ticket
  function addTicket(ticket) {
    setTickets([...tickets, ticket]);
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header darkMode={darkMode} />

      <Navigation
        view={view}
        setView={setView}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {view === "dashboard" ? (
        <DashboardView
          tickets={tickets}
          addTicket={addTicket}
        />
      ) : (
        <AboutView />
      )}
    </div>
  );
}

export default App;