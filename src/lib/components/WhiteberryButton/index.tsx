import React from 'react';

import './index.styl';

interface WhiteberryButtonProps {
  children: string;
  action: Function;
}

function WhiteberryButton({ children, action }: WhiteberryButtonProps) {
  return (
    <button onClick={(evt) => action(evt)} className="whiteberry-btn">
      {children}
    </button>
  );
}

export default WhiteberryButton;
