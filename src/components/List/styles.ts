import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* espaço entre itens */
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`;

export const Item = styled.div`
  display: grid;
  gap: 10rem;
  grid-template-columns: minmax(400px, 1fr) 2fr;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  text-align: justify;
  transition: transform 0.3s ease, box-shadow 0.3s ease, color 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    color: #92b32b;
    border-color: #92b32b;
    h3 {
      color: #d1ff3e;
    }
    p {
      color: #92b32b;
    }
  }
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Description = styled.p`
  font-size: 16px;
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
`;
