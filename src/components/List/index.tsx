import React from "react";

import { Fade } from "react-awesome-reveal";
import { Container, Item, Title, Description } from "./styles";

interface ListProps {
  items: {
    title: string;
    description: string;
  }[];
}

export const List = ({ items }: ListProps) => (
  <Container>
    {items.map((item) => (
      <Fade key={item.title} triggerOnce>
        <Item>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Item>
      </Fade>
    ))}
  </Container>
);

export default List;
