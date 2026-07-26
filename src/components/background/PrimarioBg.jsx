import { BaseBg } from "./BaseBg";
import styles from "./background.module.css";

export function PrimarioBg(props) {
  return <BaseBg className={styles.primario} {...props} />;
}
