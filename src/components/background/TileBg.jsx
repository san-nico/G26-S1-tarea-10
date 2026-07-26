import { BaseBg } from "./BaseBg";
import styles from "./background.module.css";

export function TileBg(props) {
  return <BaseBg className={styles.tile} {...props} />;
}
