import { Row } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { ContentSection, Title, Subtitle } from "./styles";

const ContentBlock = ({
  t,
  id,
  direction,
  children,
  title,
  subtitle,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        {title ? (
          <Row id={`${id}-title`}>
            <Title>{t(title)?.toUpperCase()}</Title>
          </Row>
        ) : (
          <></>
        )}
        {subtitle ? (
          <Row id={`${id}-subtitle`}>
            <Subtitle>{t(subtitle)?.toUpperCase()}</Subtitle>
          </Row>
        ) : (
          <></>
        )}
        <Row id={`${id}-content`}>{children}</Row>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
