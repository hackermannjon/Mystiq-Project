import { lazy } from "react";

const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const IntroductionSection = lazy(() => import("./sections/Introduction"));
const AboutSection = lazy(() => import("./sections/About"));
const ServicesSection = lazy(() => import("./sections/Services"));
const PortfolioSection = lazy(() => import("./sections/Portfolio"));
const ContactSection = lazy(() => import("../../components/ContactForm"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <IntroductionSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
    </Container>
  );
};

export default Home;
