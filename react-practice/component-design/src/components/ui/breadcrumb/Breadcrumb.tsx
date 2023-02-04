import styled from "styled-components";
import { NavLink } from "react-router-dom";
import React from "react";

const Breadcrumb = ({ children }: { children: React.ReactNode }) => (
  <nav aria-label="Breadcrumb">
    <Items>{children}</Items>
  </nav>
);

const Items = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

const BreadcrumbItem = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
}) => (
  <Item {...props}>
    <ItemLink to={to}>{children}</ItemLink>
  </Item>
);

const Item = styled.li`
  display: inline;

  & + &::before {
    content: "";
    display: inline-block;
    transform: rotate(15deg);
    border-right: 1px solid currentColor;
    height: 1em;
    margin: 0 8px -0.2em;
  }
`;

const ItemLink = styled(NavLink).attrs({ exact: true })`
  color: #36d;
  text-decoration: none;
  border-bottom: 1px solid transparent;

  &:hover {
    border-color: currentColor;
  }

  &.active {
    border: none;
    color: inherit;
  }
`;
