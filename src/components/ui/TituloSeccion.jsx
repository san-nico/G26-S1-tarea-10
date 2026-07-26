import styles from "./ui.module.css";

export function TituloSeccion({ children }) {
  return <h2 className={styles.titleSection}>{children}</h2>;
}
