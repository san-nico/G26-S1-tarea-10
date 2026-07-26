import { RelatorCard } from "../cards/RelatorCard";
import { TituloSeccion } from "../ui/TituloSeccion";
import Seccion from "../shared/Seccion";
import styles from "./sections.module.css";

export default function Relatores({ titulo, cards = [] }) {
  return (
    <Seccion id="relatores">
      <TituloSeccion>{titulo}</TituloSeccion>
      <div className={styles.relatoresHolder}>
        {cards.map((card, index) => (
          <RelatorCard key={card.id ?? index} card={card} />
        ))}
      </div>
    </Seccion>
  );
}
