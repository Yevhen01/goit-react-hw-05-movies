import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieLink = styled(Link)`
  margin: 0;
  text-decoration: none;
  color: #ffe6e6;
  font-size: 16px;
  font-weight: normal;
  transition: color 250ms ease;

  &:hover,
  &:focus {
    color: #e1afd1;
  }
`;
