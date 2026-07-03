/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { css } from "@emotion/react";
import { PrimarioBg } from "../background/PrimarioBg";
import Seccion from "../shared/Seccion";
import { TituloCard } from "../ui/TituloCard";
import { HeroImg } from "../img/HeroImg";
import { FotografiaImg } from "../img/FotografiaImg";
import { CircularImg } from "../img/CircularImg";
import { HeroBg } from "../background/HeroBg";
export default function Hero({ data, hero, relatores, stack }) {
  return (
    <Seccion>
      <HeroBg />
      <Limitador>
        <Info>
          <Title>{data.title}</Title>
          <Year>{data.year}</Year>

          <TituloCard>{data.highlight}</TituloCard>

          <Tags>
            {data.tags.map((tag, i) => (
              <Tag key={i}>{tag}</Tag>
            ))}
          </Tags>
          <TituloCard>Relatores USACH</TituloCard>

          <Fila>
            {relatores.map((item, i) => (
              <FotografiaWrapper>
                <FotografiaImg key={i} src={`img/${item.image}`} />
              </FotografiaWrapper>
            ))}
          </Fila>

          <TituloCard>Stack tecnológico</TituloCard>
          <Fila>
            {stack.map((item, i) => (
              <StackWrapper>
                <CircularImg key={i} src={`img/${item.image}`} />
              </StackWrapper>
            ))}
          </Fila>

          <Cta href={data.cta.href}>{data.cta.label}</Cta>
        </Info>
        <ImagenWrapper></ImagenWrapper>
      </Limitador>
    </Seccion>
  );
}

const Limitador = styled.div`
  display: grid;

  justify-self: center;
  justify-content: space-between;
  gap: 2rem;

  grid-template-columns: auto auto;

  width: min(100%, 1200px);
  @media (max-width: 830px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

const Info = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${theme.background.primario};
  padding: 2rem;
  border-radius: 1rem;
`;

//------------------------hojas

const Title = styled.h1``;

const ctaBase = css`
  padding: ${theme.spacing(2)} ${theme.spacing(6)};
  border-radius: ${theme.spacing(6)};
  border: 1px solid ${theme.colors.texto};
  font-weight: bold;
`;
const Fila = styled.div`
  display: flex;
  gap: 0.5rem;
  @media (max-width: 376px) {
    gap: 0.1rem;
  }
`;

const Year = styled.p`
  ${ctaBase};
  background: ${theme.colors.secundario};
`;

const Tags = styled.ul`
  display: grid;
  list-style-type: circle;
  gap: ${theme.spacing(2)};
`;

const Tag = styled.li`
  font-style: italic;
`;

const Cta = styled.a`
  ${ctaBase};
  background: ${theme.colors.enfasis};
`;

const ImagenWrapper = styled.div`
  @media (max-width: 830px) {
    display: none;
  }
`;
const FotografiaWrapper = styled.div`
  width: 3rem;
  object-fit: cover;

  border-radius: 0.5rem;
  overflow: hidden;
`;
const StackWrapper = styled.div`
  width: 3rem;
`;
