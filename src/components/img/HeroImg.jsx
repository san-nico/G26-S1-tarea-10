import styled from "@emotion/styled";
import fondo from "../../assets/hero-bg.jpg";
import { theme } from "../../styles/theme";

export function HeroImg() {
  return <Imagen src={fondo} />;
}

const Imagen = styled.img`
  height: 100%;
  width: 100%;
  object-position: right;
  object-fit: cover;
  border-radius: 1rem;
`;
