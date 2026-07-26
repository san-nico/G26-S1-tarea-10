import styles from "./background.module.css";

export function BaseBg({ className = "", ...props }) {
  return <div className={`${styles.base} ${className}`.trim()} {...props} />;
}
