import React from 'react';

import './index.styl';

interface BlueberryButtonProps {
  children: string;
}

function BlueberryButton({ children }: BlueberryButtonProps) {
  return (
    <button className="blueberry-btn">
      {children}
    </button>
  );
}

export default BlueberryButton;
