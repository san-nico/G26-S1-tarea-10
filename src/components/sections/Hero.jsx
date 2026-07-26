import Seccion from "../shared/Seccion";
import { TituloCard } from "../ui/TituloCard";

import { FotografiaImg } from "../img/FotografiaImg";
import { CircularImg } from "../img/CircularImg";
import { HeroBg } from "../background/HeroBg";
import styles from "./sections.module.css";

export default function Hero({ data, relatores, stack }) {
  return (
    <Seccion>
      <HeroBg />
      <div className={styles.limitador}>
        <div className={styles.info}>
          <h1>{data.title}</h1>
          <p className={styles.year}>{data.year}</p>

          <TituloCard>{data.highlight}</TituloCard>

          <ul className={styles.tags}>
            {data.tags.map((tag, i) => (
              <li className={styles.tag} key={i}>
                {tag}
              </li>
            ))}
          </ul>
          <TituloCard>Relatores USACH</TituloCard>

          <div className={styles.fila}>
            {relatores.map((item, i) => (
              <div key={i} className={styles.fotografiaWrapper}>
                <FotografiaImg src={`img/${item.image}`} alt={item.name} />
              </div>
            ))}
          </div>

          <TituloCard>Stack tecnológico</TituloCard>
          <div className={styles.fila}>
            {stack.map((item, i) => (
              <div key={i} className={styles.stackWrapper}>
                <CircularImg src={`img/${item.image}`} alt={item.name} />
              </div>
            ))}
          </div>

          <a className={styles.cta} href={data.cta.href}>
            {data.cta.label}
          </a>
        </div>
      </div>
    </Seccion>
  );
}
