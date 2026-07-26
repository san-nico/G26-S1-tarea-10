import { SecundarioBg } from "../background/SecundarioBg";
import styles from "./layout.module.css";

export default function Navbar(props) {
  return (
    <section className={styles.navSection}>
      <SecundarioBg />
      <div className={styles.navContainer}>
        <img className={styles.navImage} src={props.logo} alt="logo" />

        <nav className={styles.nav}>
          {props.nav.map((item, index) => (
            <a key={index} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
