import { ActiveLink } from "./ActiveLink";

export function Navbar({ href, text }) {
  return (
    <nav className={"navbar_home"}>
      <ActiveLink href="/about" text="About"></ActiveLink>
      <ActiveLink href="/skills" text="Skills"></ActiveLink>
      <ActiveLink href="/works" text="Works"></ActiveLink>
      <ActiveLink href="/services" text="Services"></ActiveLink>
      <ActiveLink href="/blog" text="Blog"></ActiveLink>
      <ActiveLink href="/contact" text="Contact"></ActiveLink>
    </nav>
  );
}
