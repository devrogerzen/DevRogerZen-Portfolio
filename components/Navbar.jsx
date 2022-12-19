import { ActiveLink } from "./ActiveLink";

export function Navbar({href,  text}) {
  return (
    <nav className= {'navbar_home'}>
      <ActiveLink href='/' text="Home"></ActiveLink>
      <ActiveLink href='/about' text="About"></ActiveLink>
      <ActiveLink href='/contents' text="Contents"></ActiveLink>
      <ActiveLink href='/contact' text="Contact"></ActiveLink>
    </nav>
  )
}
