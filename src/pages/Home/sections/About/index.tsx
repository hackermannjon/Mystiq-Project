import React from "react";
import ContentBlock from "../../../../components/ContentBlock";
import List from "../../../../components/List";
import { ListContainer } from "./styles";

interface AboutProps {}

const About = ({}: AboutProps) => {
  const items = [
    {
      title: "ANALYSIS AND STRATEGY",
      description:
        "We study the market, competitors and target audience. Develop an individual marketing strategy. Define key KPIs to achieve results.",
    },
    {
      title: "DEVELOPMENT AND IMPLEMENTATION",
      description:
        "We launch SEO, ads, content marketing, develop branding. We optimise websites and create landing pages.",
    },
    {
      title: "LAUNCH AND TESTING",
      description:
        "We launch advertising and A/B test creatives and optimize for ROI. Analyse user behaviour and improve conversions.",
    },
    {
      title: "MONITORING AND SCALING",
      description:
        "We adapt strategies to market changes, scale top campaigns. Provide the client with detailed reports and analytics.",
    },
  ];

  return (
    <ContentBlock id="about" title="Nós somos..." direction="right">
      <ListContainer>
        <List items={items} />
      </ListContainer>
    </ContentBlock>
  );
};

export default About;
