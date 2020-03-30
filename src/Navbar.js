import React from "react";
import styled from "styled-components";

import Link from "./components/Link";

const NavLink = styled(Link)``;

const Navbar = styled.ul`
  width: 50vw;
  // margin-left: 30vw;
  // height: 60px;
  display: inline flex;
  list-style: none;
  justify-content: space-evenly;
  align-items: center;
  font-family: var(--font-primary);
  font-size: 2.5rem;
  color: var(--color-text);
  & > li {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & > li > a {
    padding-top: 5%;
    padding-bottom: 5%;
    padding-left: 15%;
    padding-right: 15%;
    &:hover {
      color: var(--color-accent);
    }

    &::selection {
      background-color: var(--color-accent);
      color: var(--color-background);
    }
  }

  @media (max-width: 896px) {
    width: 100vw;
    margin: 0;
    font-size: 16px;
    justify-content: space-evenly;
  }
`;

const NavElement = styled.nav`
  padding-top: 5vh;

  @media (max-width: 896px) {
    padding-top: 0;
    display: block;
  }

  display: flex;
  justify-content: space-between;
  #brand_bar {
    display: inline flex;
    margin-left: 10vw;
    font-family: var(--font-primary);
    font-size: 2.5em;
    color: var(--color-text);

    @media (max-width: 896px) {
      width: 100vw;
      margin-left: 0;
      justify-content: center;
      align-items: center;
    }
  }

  #brand_bar img {
    width: 100px;
    height: auto;
  }
`;

function NavbarComp() {
  return (
    <NavElement>
      <div id="brand_bar">
        <span>SUTD Minecraft Network</span>
      </div>
      <Navbar>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/treasure">Treasure!</NavLink>
        </li>
        <li>
          <a href="https://opensutd.org/minecraft-gallery/">Gallery</a>
        </li>
        <li>
          <NavLink to="/elsewhere">Elsewhere</NavLink>
        </li>
      </Navbar>
    </NavElement>
  );
}

export default React.memo(NavbarComp);
