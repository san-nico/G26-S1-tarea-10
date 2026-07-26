import { PilarCard } from "../cards/PilarCard";
import { TituloSeccion } from "../ui/TituloSeccion";
import Seccion from "../shared/Seccion";
import styles from "./sections.module.css";

export default function Pilares({ titulo, cards = [] }) {
  return (
    <Seccion id="pilares">
      <TituloSeccion>{titulo}</TituloSeccion>
      <div className={styles.holder}>
        {cards.map((card, index) => (
          <PilarCard
            key={index}
            title={card.title}
            image={card.image}
            text={card.text}
          />
        ))}
      </div>
    </Seccion>
  );
}
