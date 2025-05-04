import React from "react";

import { Container, Title, List, ListItem } from "./styles";
import { withTranslation } from "react-i18next";

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

export default withTranslation()(Card);
