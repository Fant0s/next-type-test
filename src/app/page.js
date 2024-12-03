'use client';
import React, { useEffect, useState } from 'react';
import './page.sass';

import KeyButton from '@/components/KeyButton/KeyButton';

function Game() {
  const [pressedKeys, setPressedKeys] = useState([]);
  const [currentKey, setCurrentKey] = useState('');
  const [language, setLanguage] = useState('ru');

  // Обработчики клавиатуры
  const handleKeyDown = (e) => {
    const char = e.key === ' ' ? 'Space' : e.key;
    if (
      char !== 'Control' &&
      char !== 'Alt' &&
      char !== 'Shift' &&
      char !== 'CapsLock' &&
      char !== 'Backspace' &&
      char !== 'Enter' &&
      char !== 'Tab' &&
      char !== 'Space' &&
      char !== 'Meta' &&
      char !== 'ContextMenu'
    ) {
      setCurrentKey(char); // Отображаем текущую клавишу
      setPressedKeys((prev) => [...prev, char]);
    }
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
    <div className={'game'}>
      <p className={'text'}>{pressedKeys.join(' ')}</p>
      <div className="keyboard">
        <div className="row">
          <KeyButton
            language={language}
            keys={{ ru: ['ё', 'Ё'], en: ['`', '~'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['1', '!'], en: ['1', '!'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['2', '"'], en: ['2', '@'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['3', '№'], en: ['3', '#'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['4', ';'], en: ['4', '$'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['5', '%'], en: ['5', '%'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['6', ':'], en: ['6', '^'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['7', '?'], en: ['7', '&'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['8', '*'], en: ['8', '*'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['9', '('], en: ['9', '('] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['0', ')'], en: ['0', ')'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['-', '_'], en: ['-', '_'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['=', '+'], en: ['=', '+'] }}
            currentKey={currentKey}
          />
          <KeyButton
            type={'Backspace'}
            language={language}
            keys={{ ru: ['Backspace'], en: ['Backspace'] }}
            currentKey={currentKey}
          />
        </div>
        <div className="row">
          <KeyButton
            language={language}
            type={'Tab'}
            keys={{ ru: ['Tab'], en: ['Tab'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['й'], en: ['q'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ц'], en: ['w'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['у'], en: ['e'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['к'], en: ['r'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['е'], en: ['t'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['н'], en: ['y'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['г'], en: ['u'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ш'], en: ['i'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['щ'], en: ['o'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['з'], en: ['p'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['х'], en: ['{', '['] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ъ'], en: ['}', ']'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            type={'Slash'}
            keys={{ ru: [`\\`, `/`], en: ['\\', '|'] }}
            currentKey={currentKey}
          />
        </div>
        <div className="row">
          <KeyButton
            language={language}
            type={'Caps'}
            keys={{ ru: ['CapsLock'], en: ['CapsLock'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ф'], en: ['a'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ы'], en: ['s'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['в'], en: ['d'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['а'], en: ['f'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['п'], en: ['g'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['р'], en: ['h'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['о'], en: ['j'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['л'], en: ['k'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['д'], en: ['l'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ж'], en: [';', ':'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['э'], en: [`'`, `"`] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            type={'Enter'}
            keys={{ ru: ['Enter'], en: [`Enter`] }}
            currentKey={currentKey}
          />
        </div>
        <div className="row">
          <KeyButton
            type={'ShiftL'}
            language={language}
            keys={{ ru: ['Shift'], en: ['Shift'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['я'], en: ['z'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ч'], en: ['x'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['с'], en: ['c'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['м'], en: ['v'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['и'], en: ['b'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['т'], en: ['n'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ь'], en: ['m'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['б'], en: [',', '<'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['ю'], en: ['.', '>'] }}
            currentKey={currentKey}
          />
          <KeyButton
            language={language}
            keys={{ ru: ['.', ','], en: ['/', '?'] }}
            currentKey={currentKey}
          />
          <KeyButton
            type={'ShiftR'}
            language={language}
            keys={{ ru: ['Shift'], en: ['Shift'] }}
            currentKey={currentKey}
          />
        </div>
        <div className="row">
          {/*<KeyButton*/}
          {/*  type={'Space'}*/}
          {/*  language={language}*/}
          {/*  keys={{ ru: ['Space'], en: ['Space'] }}*/}
          {/*  currentKey={currentKey}*/}
          {/*/>*/}
        </div>
      </div>
    </div>
  );
}

export default Game;
