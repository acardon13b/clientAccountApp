import { API, graphqlOperation } from "aws-amplify";
import { listTickets } from "./graphql/queries"; // Replace with your actual query
import { useEffect, useState } from "react";

const MyTickets = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    try {
      const ticketData = await API.graphql(graphqlOperation(listTickets)); // Replace with your actual query
      const ticketsList = ticketData.data.listTickets.items; // Replace with your actual data path
      setTickets(ticketsList);
    } catch (error) {
      console.log("Error fetching tickets", error);
    }
  };

  return (
    <div>
      <h3>My Tickets :</h3>
      {tickets.map((ticket) => (
        <div key={ticket.id}>
          <p>Email: {ticket.email}</p>
          <p>Ticket Type: {ticket.ticketType}</p>
          <p>Date: {ticket.date}</p>
          <a href={ticket.url}>Download Ticket</a>
        </div>
      ))}
    </div>
  );
};

export default MyTickets;
