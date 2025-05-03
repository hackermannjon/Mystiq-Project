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

export interface IntroductionProps {
  id: string;
}
const Introduction = ({ id }: IntroductionProps) => {
  return (
    <Container id={id}>
      <ContentContainer>
        <MiddleContainer>
          <SubtitleContainer>
            <Subtitle>MARKETING</Subtitle>
            <Subtitle isRight>DE VALOR</Subtitle>
          </SubtitleContainer>
          <Text>
            Desvendamos o segredo das vendas. Estratégias que atraem, convertem
            e escalam.
          </Text>
          <Button isFilled>Agende uma reunião</Button>
        </MiddleContainer>
      </ContentContainer>
    </Container>
  );
};

export default withTranslation()(Introduction);
