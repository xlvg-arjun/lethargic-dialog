import React, { SyntheticEvent } from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import findHighestZIndex from 'highest-z-index-of-document';

import { StandardDimmer, doesDimmerExist } from '@xlvg/standard-dimmer';

// import BlueberryButton from '../BlueberryButton';
// import BlueberryButton from 'blueberry-button/libs/components/BlueberryBtn';
// import WhiteberryButton from '../WhiteberryButton';

import ButtonChooserRenderer from './ButtonChooserRenderer';

// import Action
import Action from '../../types/Action';

import './index.styl';
import Icons from '../../types/Icons';
import IconChooserRenderer from './IconChooserRenderer';

interface IconDialogProps {
  zIndex?: number;
  actions: Action[];
  closeDialog: Function;
  IconType: Icons;
  Title?: string;
  Description?: string;
  children?: string;
}

function IconDialog({ zIndex, actions, closeDialog, IconType, Title, Description, children }: IconDialogProps) {
  const closingFn = (evt: SyntheticEvent) => { closeDialog(evt); };
  let zIndexDialog = undefined;
  let zIndexDimmer = undefined;
  if (zIndex || (zIndex === 0)) {
    zIndexDimmer = zIndex;
    zIndexDialog = zIndex + 1;
  } else {
    zIndexDimmer = findHighestZIndex();
    zIndexDialog = zIndexDimmer + 1;
  }
  const zIndexUnaffectedByOverlay = zIndexDialog + 1;
  return (
    <div className="lethargic-dialog icon-dialog outer">
      { doesDimmerExist() && <StandardDimmer zIndex={zIndex} />}
      <div style={{ zIndex: zIndexDialog }} className="dialog-actual-container">
        <div className="dialog-actual">
          <div className="dialog-row window-buttons-row">
            <IoMdClose onClick={(evt: SyntheticEvent) => closingFn(evt)} className="close-btn" style={{ position: 'relative', zIndex: zIndexUnaffectedByOverlay }} />
          </div>
          <div className="dialog-row main-row">
            {(IconType !== Icons.None) &&
              <IconChooserRenderer IconType={IconType} zIndex={zIndexUnaffectedByOverlay} />
            }
            <div style={{ position: 'relative', zIndex: zIndexUnaffectedByOverlay }} className="dialog-content">
              <h4 className="title">
                {Title || ''}
              </h4>
              <div className="text-content">
                {Description || ''}
              </div>
            </div>
          </div>
          {children && <div className="dialog-row additional-content">
            {children}
          </div>}
          <div className="dialog-row btn-row">
            {
              actions.map((actionitem) => <ButtonChooserRenderer action={actionitem} closingFn={closingFn} />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconDialog;
