/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import { css } from "@emotion/react";
import { PrimarioBg } from "../background/PrimarioBg";
import Seccion from "../shared/Seccion";
import { TituloCard } from "../ui/TituloCard";
import { HeroImg } from "../img/HeroImg";
import { ImgFotografia } from "../img/FotografiaImg";
export default function Hero({ data, hero, cards }) {
  return (
    <Seccion>
      <PrimarioBg />
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

          <Relatores>
            {cards.map((item, i) => (
              <FotografiaWrapper>
                <ImgFotografia key={i} src={`img/${item.image}`} />
              </FotografiaWrapper>
            ))}
          </Relatores>

          <Cta href={data.cta.href}>{data.cta.label}</Cta>
        </Info>
        <ImagenWrapper>
          <HeroImg />
        </ImagenWrapper>
      </Limitador>
    </Seccion>
  );
}

const Limitador = styled.div`
  display: grid;

  justify-self: center;
  justify-content: space-around;

  width: ${theme.breakpoints.maximo};
  grid-template-columns: auto auto;
  align-items: center;

  gap: 1rem;
`;

const Info = styled.div`
  align-items: start;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transform: scale(1.05);
`;

//------------------------hojas

const Title = styled.h1``;

const ctaBase = css`
  padding: ${theme.spacing(2)} ${theme.spacing(6)};
  border-radius: ${theme.spacing(6)};
  border: 1px solid ${theme.colors.texto};
  font-weight: bold;
`;
const Relatores = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Year = styled.p`
  ${ctaBase};
  background: ${theme.colors.secundario};
`;

const Highlight = styled.h2`
  color: ${theme.colors.primario};
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
  transform: scale(1.3);
  @media (max-width: 1150px) {
    display: none;
  }
`;
const FotografiaWrapper = styled.div`
  width: 3rem;

  border-radius: 0.5rem;
  overflow: hidden;
`;
