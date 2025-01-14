import React, { useState } from "react";

const Contador: React.FC = () => {

    const [contador, setContador] = useState<number>(0);

    const incrementar = () => {
        setContador(contador + 1);
    }

    const decrementar = () => {
        setContador(contador - 1);
    }

    return (
        <div>
            <h1>Hook UseState</h1>
            <p>Contador {contador}</p>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={decrementar}>Restar</button>
        </div>
    )
}

export default Contador;