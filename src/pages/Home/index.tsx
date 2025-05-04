import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import MiddleBlockContent from "../../content/MiddleBlockContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const IntroductionSection = lazy(() => import("./sections/Introduction"));
const AboutSection = lazy(() => import("./sections/About"));
const ServicesSection = lazy(() => import("./sections/Services"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
