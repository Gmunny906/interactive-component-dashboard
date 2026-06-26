import TicketSummary from "../components/TicketSummary";
import TicketForm from "../components/TicketForm";
import TicketList from "../components/TicketList";

function DashboardView({ tickets, addTicket }) {
  return (
    <div>
      <TicketSummary tickets={tickets} />

      <TicketForm addTicket={addTicket} />

      <TicketList tickets={tickets} />
    </div>
  );
}

export default DashboardView;