import styles from "./footer.module.scss";
import Link from "next/link";
import classNames from "classnames";
interface ILink {
  href?: string;
  text: string;
}

interface FooterProps {
  className?: string;
  links?: ILink[];
  logoSrc?: string;
  version?: string;
}

export function Footer({ className, links, logoSrc, version }: FooterProps) {
  return (
    <footer className={classNames(styles.container, className)}>
      <ul className={styles.links}>
        {links?.map((link) => (
          <li key={link.href}>
            <Link className={styles.link} href={link.href || "#"}>
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <picture className={styles.logoContainer}>
        {/* eslint-disable-next-line @next/next/no-img-element*/}
        <img src={logoSrc} alt="logo" />
      </picture>
      <small className={styles.versionText}>Version: {version}</small>
    </footer>
  );
}
