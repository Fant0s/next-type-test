'use client';
import React from 'react';
import './KeyButton.sass';
import KeybuttonIcon from '@/components/_icons/keybutton-icon';
import KeybuttonShiftIcon from '@/components/_icons/keybutton-shift-icon';
import KeybuttonSpaceIcon from '@/components/_icons/keybutton-space-icon';

function KeyButton({ type = 'default', keys = [], currentKey }) {
  const icons = {
    default: <KeybuttonIcon />,
    space: <KeybuttonSpaceIcon />,
    shift: <KeybuttonShiftIcon />,
  };

  return (
    <div className={`key-button key-button--${type}`}>
      {/*{icons[type] || icons.default}*/}
      <div className="key-button__keys">
        {keys.map((key, index) => (
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
