import styled from "@emotion/styled";
import { theme } from "../../styles/theme";
import Seccion from "../shared/Seccion";
import { TituloSeccion } from "../ui/TituloSeccion";
import { PrimarioBg } from "../background/PrimarioBg";

export function Formulario() {
  return (
    <Seccion id="inscripcion">
      <PrimarioBg />
      <TituloSeccion>Inscríbete con nosotros</TituloSeccion>
      <Contenedor>
        <Entrada id="nombre" label="Nombre" tipo="text" />
        <Entrada id="apellido" label="Apellido" tipo="text" />
        <Entrada id="rut" label="RUT" tipo="text" />
        <Entrada id="fechaNacimiento" label="Fecha de nacimiento" tipo="date" />
        <Entrada id="casaEstudios" label="Casa de estudios" tipo="text" />
        <Entrada id="carrera" label="Carrera" tipo="text" />
        <Entrada id="telefono" label="Teléfono" tipo="tel" />
        <Entrada id="correo" label="Correo electrónico" tipo="email" />

        <Boton>Enviar</Boton>
      </Contenedor>
    </Seccion>
  );
}

export function Entrada({ id, label, tipo }) {
  return (
    <Campo>
      <Etiqueta htmlFor={id}>{label}</Etiqueta>
      <Ingreso id={id} name={id} type={tipo} />
    </Campo>
  );
}

/* ===== CSS SIN CAMBIOS ===== */

const Contenedor = styled.form`
  display: grid;
  border: ${theme.border.primario};
  padding: 2rem 1rem;
  border-radius: 1rem;
  gap: 2rem;
  grid-template-columns: 1fr 1fr;
  background: ${theme.background.primario};
  justify-items: center;
  justify-self: center;

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`;

const Campo = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const Etiqueta = styled.label`
  margin-left: 0.5rem;
`;

const Ingreso = styled.input`
  color: black;
  padding: 0.7rem 1rem;
  border-radius: 0.5rem;
  width: 15rem;
  background: ${theme.colors.primario};
`;

const Boton = styled.button`
  width: 100%;
  grid-column: 1 / -1;
  border-radius: 1rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(90deg, #7028dc, #b0d627);
`;
