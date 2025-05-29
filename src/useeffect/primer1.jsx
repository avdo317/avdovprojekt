import React, { useEffect, useState } from 'react';
function UseEffect() {
  const [time, setTime] = useState('');
  useEffect(() => {

    const mama = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(mama);
  })
  return (
    <div>
      {time}
    </div>
  );
}
export default UseEffect;
