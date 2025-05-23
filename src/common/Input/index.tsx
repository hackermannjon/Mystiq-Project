import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, label, placeholder, onChange, t }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{label}</Label>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
