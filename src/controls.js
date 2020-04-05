import React from 'react';
import axios from 'axios';

export default function Controls() {
  const pause = () => {
    axios.post('/pause');
  };

  return (
    <div>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
