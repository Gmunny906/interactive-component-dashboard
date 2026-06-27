import TicketCard from "./TicketCard";

function TicketList({ tickets }) {
  return (
    <div className="ticket-list">
      <h2>Current Tickets</h2>

      {tickets.map((ticket) => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
        />
      ))}
    </div>
  );
}

//each ticekt will become it's own component, this is the .map requirement
export default TicketList;