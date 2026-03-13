"use client";

import { useState } from "react";

export default function ContadorAleatorio() {
  const [valor, setValor] = useState("--");
  const handleClick = () => {
    const num = Math.floor(Math.random() * 100) +1;
    setValor(num);
  };
  return (
    <div>
      <h3>Número Gerado:  {valor}</h3>
      <button onClick={handleClick}>GERADOR ALEATÓRIO</button>
    </div>
  );
}