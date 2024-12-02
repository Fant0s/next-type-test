import React from 'react';
import KeybuttonIcon from '@/components/_icons/keybutton-icon';
import KeybuttonShiftIcon from '@/components/_icons/keybutton-shift-icon';
import KeybuttonSpaceIcon from '@/components/_icons/keybutton-space-icon';

function KeyButton({ type = 'default' }) {
  const renderKeyButton = () => {
    if (type === 'default') {
      return <KeybuttonIcon />;
    } else if (type === 'space') {
      return <KeybuttonSpaceIcon />;
    } else if (type === 'shift') {
      return <KeybuttonShiftIcon />;
    }
  };

  return <div className={'keybutton'}>{renderKeyButton()}1</div>;
}

export default KeyButton;
