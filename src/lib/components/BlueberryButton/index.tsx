import React from 'react';

import './index.styl';

interface BlueberryButtonProps {
  children: string;
  action: Function;
}

function BlueberryButton({ children, action }: BlueberryButtonProps) {
  return (
    <button onClick={(evt) => action(evt)} className="blueberry-btn">
      {children}
    </button>
  );
}

export default BlueberryButton;
