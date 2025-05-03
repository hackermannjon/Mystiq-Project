import styled from "styled-components";
import { ContentSection } from "../../../../components/ContentBlock/styles";
import greenLandscape from "../../../../assets/green-landscape.jpg";

export const Container = styled(ContentSection)`
  height: 90vh;
`;

export const ContentContainer = styled("div")`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${greenLandscape});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;

  height: 105%;

  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8rem 0;
`;

export const MiddleContainer = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const SubtitleContainer = styled("div")`
  display: flex;
  flex-direction: column;
  line-height: 0.5rem;
  align-items: center;
  justify-content: center;
`;

export const Subtitle = styled("h6")<{ isRight?: boolean }>`
  color: #fff;
  font-size: 80px;
  line-height: 50px;
  ${({ isRight }) =>
    isRight &&
    `
      position: relative;
      text-align: right;
      left: 250px;

      @media only screen and (max-width: 890px) {
        left: 150px;
      }
    
      @media only screen and (max-width: 414px) {
        left: 100px;
      }
    `}
  @media
    only
    screen
    and
    (max-width: 890px) {
    font-size: 47px;
    line-height: 30px;
  }

  @media only screen and (max-width: 414px) {
    font-size: 32px;
  }
`;

export const Text = styled("p")`
  margin-top: 10px;
  width: 470px;
  font-size: 25px;
`;
