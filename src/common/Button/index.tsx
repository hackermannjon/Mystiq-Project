import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({ color, children, onClick, isFilled }: ButtonProps) => (
  <StyledButton color={color} onClick={onClick} isFilled={isFilled}>
    {children}
  </StyledButton>
);
