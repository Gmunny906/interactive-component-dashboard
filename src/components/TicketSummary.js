//Tickets come from app and then information is calculated from it here

function TicketSummary({ tickets }) {
  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const closedTickets = tickets.filter(
    (ticket) => ticket.status === "Closed"
  ).length;

  return (
    <div className="summary-container">

      <div className="summary-card">
        <h3>Total Tickets</h3>
        <h1>{tickets.length}</h1>
      </div>

      <div className="summary-card">
        <h3>Open Tickets</h3>
        <h1>{openTickets}</h1>
      </div>

      <div className="summary-card">
        <h3>Closed Tickets</h3>
        <h1>{closedTickets}</h1>
      </div>

    </div>
  );
}

export default TicketSummary;