import React from 'react';

import './index.styl';

interface GreenberryButtonProps {
  children: string;
  action: Function;
}

function GreenberryButton({ children, action }: GreenberryButtonProps) {
  return (
    <button onClick={(evt) => action(evt)} className="greenberry-btn">
      {children}
    </button>
  );
}

export default GreenberryButton;
