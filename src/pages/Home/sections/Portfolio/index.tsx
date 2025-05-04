import React from "react";
import ContentBlock from "../../../../components/ContentBlock";
import FloatingCard from "../../../../components/FloatingCard";
import { Container } from "./styles";
import portfolioImg from "../../../../assets/portfolio.jpg";
import { TFunction, withTranslation } from "react-i18next";

interface PortfolioProps {
  t: TFunction;
}

const Portfolio = ({ t }: PortfolioProps) => {
  const cardsData = [
    {
      src: portfolioImg,
      caption: t("PortfolioSection.cards.0"),
    },
    {
      src: portfolioImg,
      caption: t("PortfolioSection.cards.1"),
    },
    {
      src: portfolioImg,
      caption: t("PortfolioSection.cards.2"),
    },
    {
      src: portfolioImg,
      caption: t("PortfolioSection.cards.3"),
    },
  ];

  return (
    <ContentBlock
      title={t("PortfolioSection.title")}
      subtitle={t("PortfolioSection.subtitle")}
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

export default withTranslation()(Portfolio);
