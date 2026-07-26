"use client";

import { useEffect, useState } from "react";
import { StackCard } from "../cards/StackCard";
import { TituloSeccion } from "../ui/TituloSeccion";
import Seccion from "../shared/Seccion";
import { Dot } from "../ui/Dot";
import { PrimarioBg } from "../background/PrimarioBg";
import styles from "./sections.module.css";

export default function StackSeccion({ titulo, cards }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <Seccion id="stack">
      <PrimarioBg />
      <TituloSeccion>{titulo}</TituloSeccion>
      <div className={styles.stackHolder}>
        {cards.map((item, i) => (
          <div
            key={i}
            className={`${styles.stackCardWrapper} ${i === activeIndex ? "" : styles.stackCardWrapperHidden}`}
          >
            <StackCard
              name={item.name}
              image={item.image}
              description={item.description}
            />
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {cards.map((_, i) => (
          <Dot key={i} $active={i === activeIndex} />
        ))}
      </div>
    </Seccion>
  );
}
