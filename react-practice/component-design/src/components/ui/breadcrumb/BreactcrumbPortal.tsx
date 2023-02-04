import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import useBreadcrumbContext from "./useBreadcrumbText";

const BreadcrumbPortal = () => {
  // return (
  //   <nav aria-label="Breadcrumb">
  //     <Items id="breadcrumb" />
  //   </nav>
  // );
  const [, setPortalNode] = useBreadcrumbContext();
  return (
    <nav aria-label="Breadcrumb">
      <Items ref={setPortalNode} />
    </nav>
  );
};

const Items = styled.ol`
  margin: 0;
  padding-left: 0;
  list-style: none;
`;

export const Breadcrumb = ({
  children,
  to,
  ...props
}: {
  children: React.ReactNode;
  to: string;
}) => {
  const [portalNode, setPortalNode] = useState<HTMLElement>();

  useEffect(() => {
    setPortalNode(document.getElementById("breadcrumb")!);
  }, []);

  return portalNode
    ? ReactDOM.createPortal(
        <Item {...props}>
          <ItemLink to={to}>{children}</ItemLink>
        </Item>,
        portalNode
      )
    : null;
};

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

const ItemLink = styled(NavLink)`
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

export default BreadcrumbPortal;
