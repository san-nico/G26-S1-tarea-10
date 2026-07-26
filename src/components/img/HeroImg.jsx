import fondo from "../../assets/hero-bg.jpg";
import styles from "./images.module.css";

export function HeroImg({ src }) {
  return <img className={styles.heroImage} src={src || fondo} alt="hero" />;
}
