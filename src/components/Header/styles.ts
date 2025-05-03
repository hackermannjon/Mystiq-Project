import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
  text-decoration: none;

  &:hover {
    color: #d1ff3e;
    text-decoration: none;
  }
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;
  text-decoration: none;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }

  &:hover {
    color: #d1ff3e;
    text-decoration: none;
  }
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: #ffffff; /* ajustado para branco */
    transition: fill 0.2s ease-in-out;

    &:hover {
      fill: #d1ff3e;
    }
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #ffffff;

  &:hover {
    color: #d1ff3e;
    text-decoration: none;
  }
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #ffffff;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }

  &:hover {
    color: #d1ff3e;
    text-decoration: none;
  }
`;

export const Label = styled("span")`
  font-weight: 500;
  color: #ffffff;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  &:hover {
    color: #d1ff3e;
    text-decoration: none;
  }
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
  color: #ffffff;

  &:hover {
    color: #d1ff3e;
    text-decoration: none;
  }
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #ffffff;
  text-decoration: none;

  &:hover,
  &:active,
  &:focus {
    color: #d1ff3e;
    /* text-underline-position: under; */
    /* text-decoration: #d1ff3e wavy underline; */
  }
`;
