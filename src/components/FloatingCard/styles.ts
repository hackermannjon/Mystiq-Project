import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 200px;
  gap: 5px;

  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    div {
      border-color: #92b32b;
    }
    p {
      color: #92b32b;
    }
  }
`;

export const Card = styled("div")<{ isEven: boolean }>`
  width: 200px;
  border: 1px solid #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

  ${({ isEven }) =>
    isEven &&
    `
    margin-top: 10rem;
  `}
`;

export const Image = styled("img")`
  width: 100%;
  height: auto;
`;

export const Caption = styled("p")`
  font-size: 14px;
  width: 100%;
  text-align: justify;
  text-justify: inter-word;
`;
