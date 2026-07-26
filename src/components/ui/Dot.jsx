import styles from "./ui.module.css";

export function Dot({ $active }) {
  return (
    <div
      className={`${styles.dot} ${$active ? styles.dotActive : ""}`.trim()}
    />
  );
}
