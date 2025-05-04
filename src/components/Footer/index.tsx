import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  Text,
  RightSection,
  LeftSection,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
  };

  return (
    <Extra>
      <LeftSection>
        <Text>2025 Todos os direitos reservados</Text>

        <NavLink to="/">
          <LogoContainer>
            <SvgIcon
              src="logo.png"
              aria-label="homepage"
              width="101px"
              height="64px"
            />
          </LogoContainer>
        </NavLink>
        <FooterContainer>
          <SocialLink
            href="https://www.instagram.com/mystiq.mkt/"
            src="instagram.svg"
          />
        </FooterContainer>
      </LeftSection>
      <RightSection>
        <Label htmlFor="select-lang">{t("Language")}</Label>
        <LanguageSwitchContainer>
          <LanguageSwitch onClick={() => handleChange("en")}>
            <SvgIcon
              src="united-states.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
            />
          </LanguageSwitch>
          <LanguageSwitch onClick={() => handleChange("es")}>
            <SvgIcon
              src="spain.svg"
              aria-label="homepage"
              width="30px"
              height="30px"
            />
          </LanguageSwitch>
        </LanguageSwitchContainer>
      </RightSection>
    </Extra>
  );
};

export default withTranslation()(Footer);
