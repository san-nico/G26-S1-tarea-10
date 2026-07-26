import { BaseBg } from "./BaseBg";
import styles from "./background.module.css";

export function HeroBg(props) {
  return <BaseBg className={styles.hero} {...props} />;
}
