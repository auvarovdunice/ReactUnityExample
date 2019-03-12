import React, { useState, useEffect } from 'react';


export default function Test() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
  const qwe = () => count + 1;
  return (
    <div>
      Test
      { count }

      <button type="button" onClick={() => setCount(qwe)}>
        increase
      </button>
      <button type="button" onClick={() => setCount(count - 1)}>
        deIncrease
      </button>
    </div>
  );
}
