import React, { useEffect, useRef } from 'react';

const TituloAnimado = () => {
  const tituloRef = useRef(null);
  const texto = '¡Hola, bienvenido a la app!';

  useEffect(() => {
    const letras = texto.split('');
    tituloRef.current.innerHTML = '';

    // Crear un span por letra
    letras.forEach((letra) => {
      const span = document.createElement('span');
      span.textContent = letra;
      span.style.opacity = 0;
      tituloRef.current.appendChild(span);
    });

    // Animación para escribir
    window.anime({
      targets: tituloRef.current.children,
      opacity: [0, 1],
      easing: 'easeInOutQuad',
      duration: 50,
      delay: window.anime.stagger(100),
      complete: () => {
        // Esperar 1 segundo antes de borrar
        setTimeout(() => {
          // Animación para borrar desde el final
          window.anime({
            targets: tituloRef.current.children,
            opacity: [1, 0],
            easing: 'easeInOutQuad',
            duration: 50,
            delay: window.anime.stagger(50, { direction: 'reverse' }) // 👈 importante
          });
        }, 1000);
      }
    });
  }, []);

  return (
    <h1 ref={tituloRef} style={{ fontSize: '2rem', fontWeight: 'bold' }} />
  );
};

export default TituloAnimado;
