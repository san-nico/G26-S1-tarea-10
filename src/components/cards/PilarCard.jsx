import { TituloCard } from "../ui/TituloCard";
import { SmallImg } from "../img/SmallImg";
import styles from "./cards.module.css";

export function PilarCard({ title, image, text = [] }) {
  return (
    <article className={styles.container}>
      <TituloCard>{title}</TituloCard>
      <SmallImg src={`img/${image}`} alt={title} />

      <div className={styles.textos}>
        {text.map((linea, index) => (
          <p className={styles.texto} key={index}>
            {linea}
          </p>
        ))}
      </div>
    </article>
  );
}
