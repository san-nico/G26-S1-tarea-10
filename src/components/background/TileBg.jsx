import styled from "@emotion/styled";
import fondo from "../../assets/fondo.png";
import { BaseBg } from "./BaseBg";

export const TileBg = styled(BaseBg)`
  background: url(${fondo});
  background-size: 20rem;
  background-position: center;
`;
