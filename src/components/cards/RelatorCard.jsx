import { TituloCard } from "../ui/TituloCard";
import { FotografiaImg } from "../img/FotografiaImg";
import { IconoImg } from "../img/IconoImg";
import styles from "./cards.module.css";

export function RelatorCard({ card }) {
  return (
    <article className={styles.card}>
      <div className={styles.imagenWrapper}>
        <FotografiaImg src={`img/${card.image}`} alt={card.name} />
      </div>

      <TituloCard>{card.name}</TituloCard>

      <ul className={styles.bio}>
        {card.bio.map((item, index) => (
          <li className={styles.cv} key={index}>
            {item}
          </li>
        ))}
      </ul>

      <div className={styles.contactos}>
        {card.contacto.map((item, index) => (
          <IconoImg
            key={`${item.tipo}-${index}`}
            src={`img/rrss_${item.tipo}.png`}
            href={item.enlace}
          />
        ))}
      </div>
    </article>
  );
}
