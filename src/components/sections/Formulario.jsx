import Seccion from "../shared/Seccion";
import { TituloSeccion } from "../ui/TituloSeccion";
import { PrimarioBg } from "../background/PrimarioBg";
import styles from "./sections.module.css";

export function Formulario() {
  return (
    <Seccion id="inscripcion">
      <PrimarioBg />
      <TituloSeccion>Inscríbete con nosotros</TituloSeccion>
      <form className={styles.formContainer}>
        <Entrada id="nombre" label="Nombre" tipo="text" />
        <Entrada id="apellido" label="Apellido" tipo="text" />
        <Entrada id="rut" label="RUT" tipo="text" />
        <Entrada id="fechaNacimiento" label="Fecha de nacimiento" tipo="date" />
        <Entrada id="casaEstudios" label="Casa de estudios" tipo="text" />
        <Entrada id="carrera" label="Carrera" tipo="text" />
        <Entrada id="telefono" label="Teléfono" tipo="tel" />
        <Entrada id="correo" label="Correo electrónico" tipo="email" />

        <button className={styles.boton}>Enviar</button>
      </form>
    </Seccion>
  );
}

export function Entrada({ id, label, tipo }) {
  return (
    <div className={styles.campo}>
      <label className={styles.etiqueta} htmlFor={id}>
        {label}
      </label>
      <input className={styles.ingreso} id={id} name={id} type={tipo} />
    </div>
  );
}
