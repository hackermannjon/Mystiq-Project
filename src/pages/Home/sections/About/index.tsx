import React from "react";
import ContentBlock from "../../../../components/ContentBlock";
import List from "../../../../components/List";
import { ListContainer } from "./styles";
import { TFunction, withTranslation } from "react-i18next";

interface AboutProps {
  t: TFunction;
}

const About = ({ t }: AboutProps) => {
  const items = [
    {
      title: t("About.items.0.title"),
      description: t("About.items.0.description"),
    },
    {
      title: t("About.items.1.title"),
      description: t("About.items.1.description"),
    },
    {
      title: t("About.items.2.title"),
      description: t("About.items.2.description"),
    },
    {
      title: t("About.items.3.title"),
      description: t("About.items.3.description"),
    },
  ];

  return (
    <ContentBlock
      id={"about"}
      title={t("About.title")}
      subtitle={t("About.subtitle")}
      direction="right"
    >
      <ListContainer>
        <List items={items} />
      </ListContainer>
    </ContentBlock>
  );
};

export default withTranslation()(About);
