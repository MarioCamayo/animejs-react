import React, { useEffect, useRef } from 'react';
import './TituloAnimado.css';

const TituloAnimado3 = () => {
  const tituloRef = useRef(null);
  const texto = '¡Hola, Soy Desarrollador Frontend!';

  useEffect(() => {
    const letras = texto.split('');

    const animar = () => {
      tituloRef.current.innerHTML = '';

      letras.forEach((letra) => {
        const span = document.createElement('span');
        span.innerHTML = letra === ' ' ? '&nbsp;' : letra;
        span.classList.add('letra-animada');
        span.style.opacity = 0;
        tituloRef.current.appendChild(span);
      });

      window.anime({
        targets: tituloRef.current.children,
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 50,
        delay: window.anime.stagger(100),
        complete: () => {
          setTimeout(() => {
            window.anime({
              targets: tituloRef.current.children,
              opacity: [1, 0],
              easing: 'easeInOutQuad',
              duration: 50,
              delay: window.anime.stagger(50, { direction: 'reverse' }),
              complete: () => {
                setTimeout(animar, 100);
              }
            });
          }, 500);
        }
      });
    };

    animar();
  }, []);

  return <h1 ref={tituloRef} style={{ display: 'flex', flexWrap: 'wrap' }} />;
};

export default TituloAnimado3;
