import styled from "styled-components";

export const StyledButton = styled("button")<{
  color?: string;
  isFilled?: boolean;
}>`
  background: transparent;
  color: #d1ff3e;
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  max-width: 180px;
  border: 1px solid #d1ff3e;
  border-radius: 10px;
  padding: 8px 0;
  cursor: pointer;
  margin-top: 0.625rem;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  ${({ isFilled }) =>
    isFilled &&
    `
    background-color: #d1ff3e;
    color: #515151;
    border: none;
  `}

  &:hover {
    filter: brightness(0.7);
  }
`;
