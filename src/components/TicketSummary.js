//Tickets come from app and then information is calculated from it here

function TicketSummary({ tickets }) {
  const openTickets = tickets.filter(
    (ticket) => ticket.status === "Open"
  ).length;

  const closedTickets = tickets.filter(
    (ticket) => ticket.status === "Closed"
  ).length;

  return (
    <div>
      <h2>Ticket Summary</h2>

      <p>Total Tickets: {tickets.length}</p>

      <p>Open Tickets: {openTickets}</p>

      <p>Closed Tickets: {closedTickets}</p>
    </div>
  );
}

export default TicketSummary;