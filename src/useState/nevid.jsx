import React, { useState } from 'react';
function Vidime() {
  const [count, setCount] = useState(true);
  return (
    <div>
      {count && <p>hello!</p>}
      <button onClick={() => setCount(!count)}>{count ? 'sakri' : 'prikazi'}</button>
    </div>
  );
}
export default Vidime;
