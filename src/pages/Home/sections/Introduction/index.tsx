import React from "react";
import { Title } from "../../../../components/ContentBlock/styles";
import { withTranslation } from "react-i18next";
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

export interface IntroductionProps {}

const Introduction = ({}: IntroductionProps) => {
  return (
    <Container id="intro">
      <Fade direction="left" triggerOnce>
        <ContentContainer>
          <MiddleContainer>
            <SubtitleContainer>
              <Subtitle>MARKETING</Subtitle>
              <Subtitle isRight>DE VALOR</Subtitle>
            </SubtitleContainer>
            <Text>
              Desvendamos o segredo das vendas. Estratégias que atraem,
              convertem e escalam.
            </Text>
            <Button isFilled>Agende uma reunião</Button>
          </MiddleContainer>
        </ContentContainer>
      </Fade>
    </Container>
  );
};

export default withTranslation()(Introduction);
