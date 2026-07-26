import styles from "./images.module.css";

export function IconoImg({ src, href }) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <img className={styles.iconoImage} src={src} alt="icono" />
    </a>
  );
}
