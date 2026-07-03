import styled from "styled-components";
import fondo from "../../assets/hero-bg.jpg";
import { BaseBg } from "./BaseBg";
import { theme } from "../../styles/theme";

export const HeroBg = styled(BaseBg)`
  background-image: url(${fondo});

  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: top;

  background-image:
    linear-gradient(
      to bottom,
      ${theme.background.primario},
      transparent 10%,
      transparent 90%,
      ${theme.background.primario}
    ),
    url(${fondo});
`;
