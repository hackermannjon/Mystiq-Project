import React from "react";
import ContentBlock from "../../../../components/ContentBlock";
import Card from "../../../../components/Card";
import { CardsContainer } from "./styles";

const Services = () => {
  const cards = [
    {
      title: "Targeted Advertising and Lead Generation",
      items: [
        "Small and medium-sized enterprises.",
        "Startups – new brands.",
        "Large companies.",
        "E-commerce and B2B.",
      ],
    },
    {
      title: "Advertising Campaigns Analysis",
      items: [
        "Audit of marketing activities.",
        "Advertising optimisation.",
        "Improving the content strategy.",
        "Analytical tools to track performance.",
      ],
    },
    {
      title: "SEO-Optimisation",
      items: [
        "Website audit and keyword research.",
        "Content marketing and link building.",
        "Technical optimisation.",
        "Technical optimisation.",
      ],
    },
    {
      title: "Banners and Logo",
      items: [
        "Adaptation to different formats.",
        "Design of advertising banners.",
        "Adaptation to different formats.",
      ],
    },
  ];

  return (
    <ContentBlock
      id="services"
      title="Nossos serviços"
      subtitle="Mystiq é uma Agência de Marketing que combina análise, design e marketing para te ajudar a alcançar seus objetivos."
      direction="left"
    >
      <CardsContainer>
        {cards.map((card, i) => (
          <Card title={card.title} items={card.items} key={`card-${i}`} />
        ))}
      </CardsContainer>
    </ContentBlock>
  );
};

export default Services;
