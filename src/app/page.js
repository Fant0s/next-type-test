import './page.sass';
import React from 'react';
import KeyButton from '@/components/KeyButton/KeyButton';
import KeybuttonShiftIcon from '@/components/_icons/keybutton-shift-icon';

function Game() {
  return (
    <>
      <p className={'text'}>123123123</p>
      <div className="keyboard">
        <div className="row">
          <KeyButton />
          <KeyButton type={'shift'} />
          <KeyButton type={'space'} />
        </div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </>
  );
}

export default Game;
