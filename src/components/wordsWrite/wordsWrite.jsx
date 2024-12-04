import React, { useEffect, useState } from 'react';
import './wordsWrite.sass';
import words from './words_ru.json';
import { usePathname } from 'next/navigation';

function WordsWrite({ pressedKeys }) {
  const pathname = usePathname();
  const [text, setText] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    updateScroll();
  }, [pressedKeys]);

  const updateScroll = () => {
    const maxVisibleLines = 3;
    const currentLine = Math.floor(pressedKeys.length / 60);
    setScrollIndex(Math.max(0, currentLine - maxVisibleLines + 1));
  };

  const getRandom = (max) => {
    return Math.floor(Math.random() * max);
  };

  const getText = () => {
    const length = 40;
    let arr = [];
    for (let i = 0; i < length; i++) {
      if (pathname.includes('ru')) {
        arr.push(words[getRandom(words.length)]);
      } else {
      }
    }
    setText(arr);
  };

  useEffect(() => {
    getText();
  }, []);

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
              <p className={'letter'} key={j}>
                {letter}
              </p>
            ))}
          </div>
        ))}
      </div>
      {/*<div*/}
      {/*  className="write"*/}
      {/*  style={{*/}
      {/*    transform: `translateY(calc(-1.5em * ${scrollIndex}))`,*/}
      {/*  }}*/}
      {/*></div>*/}
    </div>
  );
}

export default WordsWrite;
