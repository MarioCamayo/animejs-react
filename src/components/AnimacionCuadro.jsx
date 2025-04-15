import React, { useRef, useEffect } from 'react';

const AnimacionCuadro = () => {
  const cuadroRef = useRef(null);

  const animar = () => {
    window.anime({
      targets: cuadroRef.current,
      translateX: 250,
      rotate: '1turn',
      backgroundColor: '#00BFFF',
      duration: 1500,
      easing: 'easeInOutQuad'
    });
  };

  return (
    <div className="p-6">
      <div
        ref={cuadroRef}
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: '#FF6347',
          marginBottom: '20px'
        }}
      />
      <button onClick={animar}>Animar Cuadro</button>
    </div>
  );
};

export default AnimacionCuadro;
