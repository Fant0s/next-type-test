import React, { useCallback, useEffect, useRef, useState } from 'react';
import './wordsWrite.sass';
import words from './words_ru.json';
import { useParams, usePathname } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { clearValue, setValue } from '@/store/currentKeySlice';

function WordsWrite({ language }) {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const [text, setText] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  const [pressedKeys, setPressedKeys] = useState([]);
  const [spaces, setSpaces] = useState(0);
  const currentKey = useSelector((state) => state.currentKey.value.payload);
  const textRef = useRef([]);

  useEffect(() => {
    textRef.current = text;
  }, [text]);

  const handleKeyPress = useCallback(
    (key) => dispatch(setValue(key)),
    [dispatch]
  );

  const handleClear = useCallback(() => dispatch(clearValue()), [dispatch]);

  useEffect(() => {
    const initialPressedKeys = text.map((word) =>
      // Array(word.length + 10)
      Array(word.length)
        .fill(null)
        .map(() => ({ letter: '', isCorrect: false }))
    );
    setPressedKeys(initialPressedKeys);
  }, [text]);

  const handleKeyDown = useCallback(
    (e) => {
      const char = e.key === ' ' ? 'Space' : e.key;

      if (
        e.code.startsWith('F') ||
        [
          'Control',
          'Alt',
          'CapsLock',
          'Meta',
          'ContextMenu',
          'Tab',
          'Escape',
          'ArrowUp',
          'ArrowDown',
          'ArrowLeft',
          'ArrowRight',
          'Delete',
          'Insert',
          'Home',
          'End',
          'PageUp',
          'PageDown',
          'ScrollLock',
          'Pause',
        ].includes(char)
      ) {
        return;
      }

      if (char === 'Backspace') {
        setPressedKeys((prev) => {
          const updatedKeys = [...prev];
          // Найти последний заполненный индекс
          for (let i = updatedKeys.length - 1; i >= 0; i--) {
            const word = updatedKeys[i];
            const lastFilledIndex = word.findIndex(
              (item) => item.letter === ''
            );

            if (lastFilledIndex > 0) {
              word[lastFilledIndex - 1] = { letter: '', isCorrect: false };
              break;
            } else if (lastFilledIndex === -1 && i > 0) {
              // Если слово полностью пустое, перейти к предыдущему слову
              updatedKeys[i - 1][updatedKeys[i - 1].length - 1] = {
                letter: '',
                isCorrect: false,
              };
              break;
            }
          }
          return updatedKeys;
        });
        return;
      }

      if (char === 'Space') {
        setPressedKeys((prev) => {
          const updatedKeys = [...prev];
          for (let i = 0; i < updatedKeys.length; i++) {
            const word = updatedKeys[i];
            const indexToUpdate = word.findIndex((item) => item.letter === '');

            if (indexToUpdate !== -1) {
              // Если есть незаполненные символы, пропустить заполнение текущего слова
              word[indexToUpdate] = {
                letter: ' ',
                isCorrect: true,
              };
              break;
            }
          }
          return updatedKeys;
        });
        setSpaces((prev) => prev + 1); // Увеличить счетчик пробелов
        return;
      }

      let currentLetter = char === 'Space' ? ' ' : char;

      setPressedKeys((prev) => {
        const updatedKeys = [...prev];
        for (let i = 0; i < updatedKeys.length; i++) {
          const word = updatedKeys[i];
          const indexToUpdate = word.findIndex((item) => item.letter === '');

          if (indexToUpdate !== -1) {
            if (currentLetter && currentLetter !== 'Shift') {
              word[indexToUpdate] = {
                letter: currentLetter,
                isCorrect:
                  textRef.current[i]?.[indexToUpdate] === currentLetter,
              };
            }
            break;
          }
        }
        return updatedKeys;
      });

      handleKeyPress(currentLetter);
    },
    [handleKeyPress]
  );

  const handleKeyUp = useCallback(() => {
    handleClear();
  }, [handleClear]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  useEffect(() => {
    updateScroll();
  }, [pressedKeys]);

  const updateScroll = () => {
    const maxVisibleLines = 3;
    const currentLine = Math.floor(pressedKeys.length / 60);
    setScrollIndex(Math.max(0, currentLine - maxVisibleLines + 1));
  };

  useEffect(() => {
    const generateText = () => {
      const length = 40;
      const arr = Array.from({ length }, () =>
        pathname.includes('ru') ? words[getRandom(words.length)] : 'test'
      );
      setText(arr);
    };

    generateText();
  }, [pathname]);

  const getRandom = (max) => Math.floor(Math.random() * max);

  return (
    <div className="text">
      <div className="caret"></div>
      <div
        className="original"
        style={{
          transform: `translateY(calc(-1.5em * ${scrollIndex}))`,
        }}
      >
        {text.map((item, i) => (
          <div className="word" key={i}>
            {item.split('').map((letter, j) => (
              <p
                className={`letter ${
                  pressedKeys[i] &&
                  pressedKeys[i][j] &&
                  pressedKeys[i][j].letter !== ''
                    ? pressedKeys[i][j].isCorrect
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }`}
                key={j}
              >
                {letter}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WordsWrite;
