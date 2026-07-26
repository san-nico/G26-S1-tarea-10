import styles from "./images.module.css";

export function CircularImg(props) {
  return (
    <div className={styles.circularContainer}>
      <img className={styles.circularImage} {...props} />
    </div>
  );
}
