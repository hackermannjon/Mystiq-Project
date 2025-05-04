import React from "react";
import { Card, Image, Caption, Container } from "./styles";

interface FloatingCardProps {
  src: string;
  alt?: string;
  caption: string;
  index: number;
}

const FloatingCard = ({ src, alt, caption, index }: FloatingCardProps) => {
  const isEvenCard = index % 2 === 0;

  return (
    <Container>
      <Card isEven={isEvenCard}>
        <Image src={src} alt={alt} />
      </Card>
      <Caption>{caption}</Caption>
    </Container>
  );
};

export default FloatingCard;
