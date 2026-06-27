function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <h3>{ticket.title}</h3>

      <p>
        <strong>Priority:</strong> {ticket.priority}
      </p>

      <p>
        <strong>Technician:</strong> {ticket.technician}
      </p>

      <p>
        <strong>Status:</strong> {ticket.status}
      </p>
    </div>
  );
}

export default TicketCard;