import styled from "styled-components";

export const Container = styled("div")`
  background-color: #111;
  border: 1px solid #fff;
  padding: 2rem;
  color: #fff;
  max-width: 600px;
  border-radius: 10px;
`;

export const Title = styled("h2")`
  font-size: 30px;
  font-weight: 700;
  margin: 0 0 1.5rem;
  line-height: 1.2;
  text-transform: uppercase;
  color: #fff;
`;

export const List = styled("ul")`
  list-style: inside disc;
  margin: 0;
  padding: 0;
`;

export const ListItem = styled("li")`
  margin-bottom: 0.75rem;
  font-size: 1rem;
`;
