import Link from "next/link";
import { useRouter } from "next/router";


export const ActiveLink = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link className={ asPath === href ? 'nav-link__active' : 'nav-link'} href={href}>
      {text}
    </Link>
  );
};
