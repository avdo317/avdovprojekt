import React, { useState } from 'react';

const Product = ({ image, price, buttons }) => {
  const kliok = (buttonText) => {
    console.log(buttonText);
  };
  return (
    <div className="product">
      <img src={image} alt="ohoo" />
      <p>Cena {price} eur</p>
      <div className="buttons">
        {buttons.map((text, index) => (
          <button key={index} onClick={() => kliok(text)}>
            {text}
          </button>
        ))}
      </div>
    </div>
  );
};
const PrimerState = () => {
  return (
    <div className="container">
      <Product
        image=""
        price={10000000}
        buttons={['38', 'oni', 'mamam', '58']}
      />
      <Product
        image=""
        price={15458798000}
        buttons={['aaaaa', 'niko', 'omg', '18331']}
      />
      <Product
        image=""
        price={205678900}
        buttons={['313r', 'Minu14s', 'Vi44444e info', 'Kupi odmah']}
      />
    </div>
  );
};

export default PrimerState;

