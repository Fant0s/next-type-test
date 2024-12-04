'use client';
import React from 'react';
import './KeyButton.sass';
import BackspaceIcon from '@/components/_icons/backspace-icon';
import ShiftIcon from '@/components/_icons/shift-icon';
import TabIcon from '@/components/_icons/tab-icon';
import EnterIcon from '@/components/_icons/enter-icon';

function KeyButton({
  language,
  type = 'default',
  keys = {},
  currentKey,
  write = true,
}) {
  const setButtonClass = () => {
    if (keys[language].includes(currentKey) && !write)
      return 'active not-write';
    if (keys[language].includes(currentKey)) return 'active';
    if (!write) return 'not-write';
    return '';
  };

  const setKeyClass = () => {
    if (currentKey === 'Shift' && type === 'default' && type !== 'default')
      return 'Upper common';
    if (currentKey === 'Shift' && type === 'default') return 'Upper';
    if (type !== 'default') return 'common';
    return '';
  };

  const setKey = (key) => {
    if (key === 'Backspace') return <BackspaceIcon />;
    else if (key === 'Enter') return <EnterIcon />;
    else if (key === 'Shift') return <ShiftIcon />;
    else if (key === 'Tab') return <TabIcon />;
    else if (key === 'CapsLock') return 'Caps Lock';
    else return key;
  };

  return (
    <div className={`key-button key-button--${type} ${setButtonClass()}`}>
      <div className="key-button__keys">
        {keys[language]?.map((key, index) => (
          <p key={index} className={`key-button__key ${setKeyClass()}`}>
            {setKey(key)}
          </p>
        ))}
      </div>
    </div>
  );
}

export default KeyButton;
