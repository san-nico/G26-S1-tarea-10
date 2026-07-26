import { BaseBg } from "./BaseBg";
import styles from "./background.module.css";

export function SecundarioBg(props) {
  return <BaseBg className={styles.secundario} {...props} />;
}
