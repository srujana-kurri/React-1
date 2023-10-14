import React, { useState } from 'react';
import './App.css';

function App() {
  const [text, setText] = useState('');
  
  const countWords = () => {
    const words = text.trim().split(/\s+/);
    return words.length === 1 && words[0] === '' ? 0 : words.length;
  };
  
 return (
    <div className="container">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        className="textarea"
        placeholder="Enter any text here.."
        value={text}
        onChange={(a) => setText(a.target.value)}
      />
      <p>Word Count: {countWords()}</p>
    </div>
  );
}

export default App;
