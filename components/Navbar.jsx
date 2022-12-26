import { ActiveLink } from "./ActiveLink";

export function Navbar({href,  text}) {
  return (
    <nav className= {'navbar_home'}>
      <ActiveLink href='/' text="Home"></ActiveLink>
      <ActiveLink href='/about' text="Quien Soy"></ActiveLink>
      <ActiveLink href='/contents' text="Contenido"></ActiveLink>
      <ActiveLink href='/contact' text="Contacto"></ActiveLink>
    </nav>
  )
}
