import styled from "@emotion/styled";
import fondo from "../../assets/hero-bg.jpg";
import { theme } from "../../styles/theme";

export function HeroImg() {
  return (
    <Contenedor>
      <Imagen src={fondo} />
    </Contenedor>
  );
}

const Contenedor = styled.div`
  grid-template-areas: "layout";
  display: grid;
`;

const Imagen = styled.img`
  height: 20rem;
  width: auto;
  z-index: 0;
  grid-area: layout;
  border: 1px solid ${theme.colors.primario};
  object-fit: cover;
  border-radius: 1rem;
`;
