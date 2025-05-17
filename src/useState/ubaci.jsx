import React, { useState } from 'react';

function Ime() {
  const [input, setI] = useState("");
  const [name, setName] = useState("");
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setI(e.target.value)}
        placeholder="Enter your name"
      />
      <button onClick={() => { setName(input); setI("") }}>Submit</button>
      <p>{name && name}</p>
    </div>
  );
}

export default Ime;

