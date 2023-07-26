import { API, graphqlOperation } from "aws-amplify";
import { listTickets } from "./graphql/queries"; // Replace with your actual query
import { useEffect, useState } from "react";
import TicketCard from './TicketCard'; // Import the TicketCard component
import './MyTickets.css'; // Import the CSS file

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
    <div className="section">
        <h3>My Tickets :</h3>
    <div className="container">
      
      {tickets.map((ticket) => (
        <TicketCard key={ticket.id} ticket={ticket} />  // Use the TicketCard component to render each ticket
      ))}
    </div>
    </div>
  );
};

export default MyTickets;
