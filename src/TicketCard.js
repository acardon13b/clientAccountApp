import React from 'react';
import { Card, Flex, Text } from '@aws-amplify/ui-react';
import './TicketCard.css'; // Import the CSS file


function TicketCard({ ticket }) {
  return (
    <Card className="rounded-border">
      <Flex direction="column">
        <Text fontWeight="bold">Ticket Type: {ticket.ticketType}</Text>
        <Text>Date: {ticket.date}</Text>
        <Text>Email: {ticket.email}</Text>
        <a href={ticket.url}>Retrieve Ticket</a>
      </Flex>
    </Card>
  );
}

export default TicketCard;
