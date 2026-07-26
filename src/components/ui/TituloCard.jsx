import styles from "./ui.module.css";

export function TituloCard({ children }) {
  return <h3 className={styles.titleCard}>{children}</h3>;
}
