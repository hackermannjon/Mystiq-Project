import React from "react";

import { Container, Title, List, ListItem } from "./styles";

interface CardProps {
  title: string;
  items: string[];
}

const Card = ({ title, items }: CardProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <List>
        {items.map((text, i) => (
          <ListItem key={i}>{text}</ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Card;
