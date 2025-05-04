import React from "react";
import ContentBlock from "../../../../components/ContentBlock";
import Card from "../../../../components/Card";
import { CardsContainer } from "./styles";
import { TFunction, withTranslation } from "react-i18next";

interface ServicesProps {
  t: TFunction;
}
const Services = ({ t }: ServicesProps) => {
  const cards = [
    {
      title: t("Services.cards.0.title"),
      items: [
        t("Services.cards.0.items.0"),
        t("Services.cards.0.items.1"),
        t("Services.cards.0.items.2"),
        t("Services.cards.0.items.3"),
      ],
    },
    {
      title: t("Services.cards.1.title"),
      items: [
        t("Services.cards.1.items.0"),
        t("Services.cards.1.items.1"),
        t("Services.cards.1.items.2"),
        t("Services.cards.1.items.3"),
      ],
    },
    {
      title: t("Services.cards.2.title"),
      items: [
        t("Services.cards.2.items.0"),
        t("Services.cards.2.items.1"),
        t("Services.cards.2.items.2"),
        t("Services.cards.2.items.3"),
      ],
    },
    {
      title: t("Services.cards.3.title"),
      items: [
        t("Services.cards.3.items.0"),
        t("Services.cards.3.items.1"),
        t("Services.cards.3.items.2"),
      ],
    },
  ];

  return (
    <ContentBlock
      id="services"
      title={t("Services.title")}
      subtitle={t("Services.subtitle")}
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

export default withTranslation()(Services);
