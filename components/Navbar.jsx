import Image from "next/image";
import { ActiveLink } from "./ActiveLink";
import styled from "styled-components";

export function Navbar({ href, text }) {
  const Navbar_home = styled.nav`
    font-family: SourceSansProBlack;
    width: 100%;
    font-size: 15px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 1);
    position: sticky;
    color: #fff;
    
  `;


  const Title_logo = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 1.2rem;
  `;

  const Menu_pages = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    padding: 0;
    font-size: 1.1rem;
    li {
      padding-left: 15px;
    }
  `;

  return (
    <Navbar_home>
      <Title_logo>
        <h2>D</h2>
        <h3>ev</h3>
        <h2>R</h2>
        <h3>oger</h3>
        <h2>Z</h2>
        <h3>en</h3>
      </Title_logo>
      <Menu_pages>
        <li>
          <ActiveLink href="/" text="Home"></ActiveLink>
        </li>
        {/* <ActiveLink href="/about" text="Curriculo"></ActiveLink>
        <ActiveLink href="/skills" text="Skills"></ActiveLink> */}
        <li>
          <ActiveLink href="/works" text="Proyectos"></ActiveLink>
        </li>
        {/* <ActiveLink href="/services" text="Services"></ActiveLink> */}
        <li>
          <ActiveLink href="/blog" text="Blog"></ActiveLink>
        </li>
        <li>
          <ActiveLink href="/contact" text="Contacto"></ActiveLink>
        </li>
      </Menu_pages>
      <div>Social&Login&logaut</div>
    </Navbar_home>
  );
}
