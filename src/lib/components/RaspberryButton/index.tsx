import React from 'react';

import './index.styl';

interface RaspberryButtonProps {
  children: string;
  action: Function;
}

function RaspberryButton({ action, children }: RaspberryButtonProps) {
  return (
    <button onClick={(evt) => action(evt)} className="raspberry-btn">
      {children}
    </button>
  );
}

export default RaspberryButton;
