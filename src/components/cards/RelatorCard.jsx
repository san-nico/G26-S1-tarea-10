import styled from "@emotion/styled";

import { TituloCard } from "../ui/TituloCard";
import { FotografiaImg } from "../img/FotografiaImg";
import { IconoImg } from "../img/IconoImg";

export function RelatorCard({ card }) {
  return (
    <Container>
      <ImagenWrapper>
        <FotografiaImg src={`img/${card.image}`} alt={card.name} />
      </ImagenWrapper>

      <TituloCard>{card.name}</TituloCard>

      <Bio>
        {card.bio.map((item, index) => (
          <Cv key={index}>{item}</Cv>
        ))}
      </Bio>

      <Contactos>
        {card.contacto.map((item, index) => (
          <IconoImg
            key={`${item.tipo}-${index}`}
            src={`img/rrss_${item.tipo}.png`}
            href={item.enlace}
          />
        ))}
      </Contactos>
    </Container>
  );
}
//contenedores
const Container = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;

  grid-template-areas:
    "imagen nombre"
    "imagen stats"
    "imagen contactos";

  @media (max-width: 480px) {
    justify-self: center;
    grid-template-areas:
      "imagen"
      "nombre"
      "stats"
      "contactos";
    grid-template-columns: min-content;
    > * {
      justify-self: center;
    }
  }
`;

const Contactos = styled.div`
  display: flex;
  gap: 0.5rem;
  grid-area: contactos;
  @media (max-width: 480px) {
    grid-area: imagen;
    justify-self: end;
    align-self: end;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    justify-self: right;
  }
`;

//hojas

const Bio = styled.ul`
  display: grid;
  gap: 0.5rem;
  grid-area: stats;

  align-content: center;
`;

const Cv = styled.li``;
const ImagenWrapper = styled.div`
  width: 16rem;
  grid-area: imagen;
`;
