import { CircularImg } from "../img/CircularImg";
import styles from "./cards.module.css";

export function StackCard({ name, image, description }) {
  return (
    <div className={styles.stackCard}>
      <h1 className={styles.stackTitle}>{name}</h1>
      <div className={styles.stackImageWrapper}>
        <CircularImg src={`img/${image}`} />
      </div>
      <p className={styles.stackDescription}>{description}</p>
    </div>
  );
}
