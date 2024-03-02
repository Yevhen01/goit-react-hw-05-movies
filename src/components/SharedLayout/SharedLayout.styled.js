import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const LayoutContainer = styled.div`
  background-color: blue;
`;

export const Header = styled.header`
  background-color: #ffe6e6;

  padding: 10px;
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  margin-left: 20px;
  font-size: 20px;

  color: #7469b6;
  font-weight: 500;
  transition: all 250ms ease;

  &.active {
    color: #6420aa;
    text-decoration: underline;
  }

  &:hover,
  :focus {
    color: #6420aa;
  }
`;
