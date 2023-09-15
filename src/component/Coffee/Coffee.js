import React from 'react';
import './Coffee.css'; // Import your CSS file

function Coffee() {
  return (
    <div className="coffee-section">
      <h2>Buy Me a Coffee</h2>
      <p>If you find my content helpful, consider supporting me by buying me a coffee.</p>
      <a
        href="https://www.buymeacoffee.com/gabrielchoong"
        target="_blank"
        rel="noopener noreferrer"
        className="coffee-button"
      >
        Buy Me a Coffee
      </a>
    </div>
  );
}

export default Coffee;
