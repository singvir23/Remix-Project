import React, { useState } from 'react';
import axios from 'axios';

function DearAleph() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    const prompt = `Dear Aleph, ${input}`;
    try {
      const res = await axios.post('http://localhost:5000/api/generate', { prompt });
      setResponse(res.data);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div>
      <h2>Dear Aleph</h2>
      <textarea
        placeholder="Write a message to Aleph..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>
      <button onClick={handleSubmit}>Send</button>
      {response && <p>Response: {response}</p>}
    </div>
  );
}

export default DearAleph;
