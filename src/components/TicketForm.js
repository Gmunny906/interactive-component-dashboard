import { useState } from "react";

function TicketForm({ addTicket }) {

  //Three states, this stores what the user is typing into the form
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [technician, setTechnician] = useState("");

  function handleSubmit(event) {
    event.preventDefault(); //Prevents from refresh

    if (title.trim() === "" || technician.trim() === "") {
      alert("Please fill out all fields.");
      return;
    }

    const newTicket = { // creates new ticket
      id: Date.now(),
      title,
      priority,
      technician,
      status: "Open",
    };

    addTicket(newTicket); //TicketForm does not own ticket list, ask app.js to add ticket, that is why addTicket is a prop

    setTitle("");
    setPriority("Low");
    setTechnician("");
  }

  //This return has the button handleSuvmit that will call the handleSubmit function 
  return (
    <div>
      <h2>Create New Ticket</h2>

      <form onSubmit={handleSubmit}> 

        <div>
          <label>Ticket Title</label>
          <br />

          <input
            type="text"
            value={title} // This appears in the textbox
            onChange={(event) => setTitle(event.target.value)} // This saves the text typed by the user as it is being typed
          />
        </div>

        <br />

        <div>
          <label>Priority</label>
          <br />

          <select
            value={priority}
            onChange={(event) => setPriority(event.target.value)}
          >
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </select>
        </div>

        <br />

        <div>
          <label>Technician</label>
          <br />

          <input
            type="text"
            value={technician}
            onChange={(event) =>
              setTechnician(event.target.value)
            }
          />
        </div>

        <br />

        <button type="submit">
          Add Ticket
        </button>

      </form>
    </div>
  );
}

export default TicketForm;