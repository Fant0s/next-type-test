'use client';
import React from 'react';
import './KeyButton.sass';

function KeyButton({ language, type = 'default', keys = {}, currentKey }) {
  return (
    <div className={`key-button key-button--${type}`}>
      {/*{icons[type] || icons.default}*/}
      <div className="key-button__keys">
        {keys[language]?.map((key, index) => (
          <span
            key={index}
            className={`key-button__key ${currentKey === key ? 'active' : ''}`}
          >
            {key}
          </span>
        ))}
      </div>
    </div>
  );
}

export default KeyButton;
