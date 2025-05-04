import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 2rem 0 5rem;
  height: 100vh;
  max-height: 100vh;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Title = styled("h5")`
  color: #d1ff3e;
`;

export const Subtitle = styled("p")`
  font-size: 20px;
  margin-top: 30px;
  max-width: 30%;
  text-align: justify;
  text-justify: inter-word;
`;
