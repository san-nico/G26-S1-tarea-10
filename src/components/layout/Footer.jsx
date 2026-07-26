import { SecundarioBg } from "../background/SecundarioBg";
import styles from "./layout.module.css";

export default function Footer({ data }) {
  return (
    <footer className={styles.footerSection}>
      <SecundarioBg />
      <p>{data.copyright}</p>

      <a
        className={styles.footerLink}
        href={data.privacy.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        {data.privacy.text}
      </a>
    </footer>
  );
}
