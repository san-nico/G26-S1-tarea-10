import styled from "@emotion/styled";

export function CircularImg(props) {
  return (
    <Contenedor>
      <Imagen {...props} />
    </Contenedor>
  );
}

export const Contenedor = styled.div`
  display: grid;
  background: white;
  border-radius: 50%;
  aspect-ratio: 1/1;
`;
export const Imagen = styled.img`
  align-self: center;
  justify-self: center;
  border-radius: 50%;
  aspect-ratio: 1/1;
  width: 95%;
`;
