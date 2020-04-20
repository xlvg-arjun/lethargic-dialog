import React from 'react';

import Action from '../../types/Action';
import Actions from '../../types/Actions';

import BlueberryButton from '../BlueberryButton';
import WhiteberryButton from '../WhiteberryButton';
import RaspberryButton from '../RaspberryButton';
import GreenberryButton from '../GreenberryButton';

interface RendererProps {
  action: Action;
  closingFn: Function;
}

function ButtonChooserRenderer(props: RendererProps) {
  const { action: { Label, ActionType, KeepAlive, Action }, closingFn } = props;
  const finalClosingFn = KeepAlive ? Action : () => { Action(closingFn); };
  switch (ActionType) {
    case Actions.Success:
      return <GreenberryButton action={finalClosingFn}>{Label}</GreenberryButton>;
    case Actions.Confirm:
      return <BlueberryButton action={finalClosingFn}>{Label}</BlueberryButton>;
    case Actions.Info:
      return <WhiteberryButton action={finalClosingFn}>{Label}</WhiteberryButton>;
    case Actions.Danger:
      return <RaspberryButton action={finalClosingFn}>{Label}</RaspberryButton>;
  }
}

export default ButtonChooserRenderer;
