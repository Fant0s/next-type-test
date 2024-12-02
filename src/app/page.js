'use client';
import './page.sass';
import React, { useEffect, useState } from 'react';
import KeyButton from '@/components/KeyButton/KeyButton';

function Game() {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [currentKey, setCurrentKey] = useState('');
  const [language, setLanguage] = useState('en');

  // Обработчики клавиатуры
  const handleKeyDown = (e) => {
    const char = e.key === ' ' ? 'Space' : e.key;
    setCurrentKey(char); // Отображаем текущую клавишу
    setPressedKeys((prev) => [...prev, char]);
  };

  const handleKeyUp = () => {
    setCurrentKey('');
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [language]); // Перезагрузка при смене языка

  // Переключение языка
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };
  return (
    <>
      <p className={'text'}>{pressedKeys.join(' ')}</p>
      <div className="keyboard">
        <div className="row">
          <KeyButton keys={['`', 'ё', '~']} currentKey={currentKey} />
          <KeyButton keys={['1', '!']} currentKey={currentKey} />
          <KeyButton keys={['2', '@', '"']} currentKey={currentKey} />
          <KeyButton keys={['3', '№', '#']} currentKey={currentKey} />
          <KeyButton keys={['4', '$', ';']} currentKey={currentKey} />
        </div>
        <div className="row">
          <KeyButton keys={['q', 'й']} currentKey={currentKey} />
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </>
  );
}

export default Game;
