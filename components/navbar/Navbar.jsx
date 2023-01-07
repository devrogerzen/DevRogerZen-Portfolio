import { ActiveLink } from "./ActiveLink";
import styled from "styled-components";
import GitHubIcon from "../../public/img/icons/github.png";
import LinkedinIcon from "../../public/img/icons/linkedin.png";
import Image from "next/image";
import Link from "next/link";
import LogoDRogerZ from "../../public/logodrogerz.png";

export function Navbar({ href, text }) {
  const Navbar_home = styled.nav`
    font-family: SourceSansProBlack;
    width: 100%;
    font-size: 15px;
    height: 80px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    background-color: rgba(0, 0, 0, .5);
    position: sticky;
    color: #fff;
  `;

  const Title_logo = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    font-size: 1.2rem;
    img {
      width: 80px;
      height: 80px;
      position: relative;
    }
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

  const Socialicons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    position: relative;
    img {
      width: 40px;
      height: 40px;
      position: relative;
      margin-right: 40px;
    }
  `;

  return (
    <Navbar_home>
      <Title_logo>
        <Image src={LogoDRogerZ} alt="LogoDevRogerZen" />
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
      <Socialicons>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/roger-jimenez-3929149b"
        >
          <Image src={LinkedinIcon} alt="icon" />
        </Link>
        <Link target="_blank" href="https://github.com/devrogerzen">
          <Image src={GitHubIcon} alt="icon" />
        </Link>
      </Socialicons>
    </Navbar_home>
  );
}
