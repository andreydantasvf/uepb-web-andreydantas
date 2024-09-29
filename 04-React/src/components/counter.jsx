import { useEffect, useState } from 'react'

export function Counter() {
  const [contador, setContador] = useState(0);
  const [rodando, setRodando] = useState(true);

  useEffect(() => {
    if (rodando) {
      const intervalo = setInterval(() => {
        setContador((prevContador) => prevContador + 1);
      }, 1000);

      return () => clearInterval(intervalo);
    }
  }, [rodando]);

  const pararContador = () => {
    setRodando(false);
  };

  const iniciarContador = () => {
    setRodando(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1>Contador: {contador}</h1>
      <button onClick={pararContador} disabled={!rodando}>
        Parar Contador
      </button>
      <button onClick={iniciarContador} disabled={rodando}>
        Iniciar Contador
      </button>
    </div>
  )
}
