import React from "react";

type MensajeProps = {
    texto: string;
}

const Mensaje: React.FC<MensajeProps> = ({ texto }) => {
    return <h2>{texto}</h2>
}

export default Mensaje;