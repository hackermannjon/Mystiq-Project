import React from "react";
import { TFunction, withTranslation } from "react-i18next";
import {
  Container,
  ContentContainer,
  MiddleContainer,
  Subtitle,
  SubtitleContainer,
  Text,
} from "./styles";
import { Button } from "../../../../common/Button";
import { Fade } from "react-awesome-reveal";

export interface IntroductionProps {
  t: TFunction;
}

const Introduction = ({ t }: IntroductionProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Container id="intro">
      <Fade direction="left" triggerOnce>
        <ContentContainer>
          <MiddleContainer>
            <SubtitleContainer>
              <Subtitle>{t("Introduction.title1")}</Subtitle>
              <Subtitle isRight>{t("Introduction.title2")}</Subtitle>
            </SubtitleContainer>
            <Text>{t("Introduction.text")}</Text>
            <Button onClick={() => scrollTo("contact")} isFilled>
              {t("Introduction.button")}
            </Button>
          </MiddleContainer>
        </ContentContainer>
      </Fade>
    </Container>
  );
};

export default withTranslation()(Introduction);
