import styles from "./shared.module.css";

export default function Seccion({ id, children }) {
  return (
    <section className={styles.container} id={id}>
      {children}
    </section>
  );
}
