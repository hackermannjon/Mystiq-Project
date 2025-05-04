import React from "react";
import ContentBlock from "../../../../components/ContentBlock";
import FloatingCard from "../../../../components/FloatingCard";
import { Container } from "./styles";
import portfolioImg from "../../../../assets/portfolio.jpg";

const Portfolio = () => {
  const cardsData = [
    {
      src: portfolioImg,
      caption: "Brand Launch Kit for a tech startup",
    },
    {
      src: portfolioImg,
      caption: "Digital promotion of a clothing brand",
    },
    {
      src: portfolioImg,
      caption: "Developing a content strategy for a jewellery brand",
    },
    {
      src: portfolioImg,
      caption: "Branding and logo development for a coffee shop",
    },
  ];

  return (
    <ContentBlock
      title="Portfólio"
      subtitle="Nós criamos estratégias efetivas, conteúdo único e campanhas eficientes que trazem resultados. Veja nossas soluções."
      direction="right"
      id="portfolio"
    >
      <Container>
        {cardsData.map((c, i) => (
          <FloatingCard
            key={i}
            src={c.src}
            alt={c.caption}
            caption={c.caption}
            index={i}
          />
        ))}
      </Container>
    </ContentBlock>
  );
};

export default Portfolio;
