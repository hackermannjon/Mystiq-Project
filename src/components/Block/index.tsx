import { withTranslation, TFunction } from "react-i18next";
import { Container, TextWrapper, Content, Title } from "./styles";

interface Props {
  title: string;
  content: string;
  t: TFunction;
}

const Block = ({ title, content, t }: Props) => {
  return (
    <Container>
      <Title>{t(title).toUpperCase()}</Title>
      <TextWrapper>
        <Content>{t(content).toUpperCase()}</Content>
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
