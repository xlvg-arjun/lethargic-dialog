import React, { ReactComponentElement } from 'react';

import { FaQuestionCircle, FaExclamationCircle, FaInfoCircle } from 'react-icons/fa';
import { IoIosWarning } from 'react-icons/io';
import { TiTick } from 'react-icons/ti';

import Icons from '../../types/Icons';

interface RendererProps {
  IconType: Icons;
  zIndex: number;
}

function IconChooserRenderer({ IconType, zIndex }: RendererProps) {
  console.log({ IconType });
  let TagName: any = null;
  let color: string = '';
  switch(IconType) {
    case Icons.Success:
      TagName = TiTick;
      color = 'green';
      break;
    case Icons.Confirm:
      TagName = FaExclamationCircle;
      color = 'royalblue';
      break;
    case Icons.Info:
      TagName = FaInfoCircle;
      color = 'gold';
      break;
    case Icons.Danger:
      TagName = IoIosWarning;
      color = 'red';
      break;
  }
  return (
    <div className="image" style={{color}}>
      <TagName style={{position: 'relative', zIndex }} className="image-content" />
    </div>
  );
}

export default IconChooserRenderer;
