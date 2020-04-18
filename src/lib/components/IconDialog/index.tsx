import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

import findHighestZIndex from 'highest-z-index-of-document';

import { StandardDimmer } from '@xlvg/standard-dimmer';

// import BlueberryButton from '../BlueberryButton';
import BlueberryButton from 'blueberry-button/libs/components/BlueberryBtn';

import './index.styl';

interface IconDialogProps {
  zIndex?: number;
}

function IconDialog({ zIndex }: IconDialogProps) {
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
      <StandardDimmer zIndex={zIndex} />
      <div style={{ zIndex: zIndexDialog }} className="dialog-actual-container">
        <div className="dialog-actual">
          <div className="dialog-row main-row">
            <div className="image">
              <FaQuestionCircle style={{position: 'relative', zIndex: zIndexUnaffectedByOverlay}} className="image-content" />
            </div>
            <div style={{position: 'relative', zIndex: zIndexUnaffectedByOverlay}} className="dialog-content">
              <h4 className="title">
                Title
            </h4>
              <div className="text-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A sit ipsam, asperiores pariatur temporibus, alias dignissimos impedit assumenda error dolores nam quo dolorum numquam dicta! Molestias quia quis in natus.
            </div>
            </div>
          </div>
          <div className="dialog-row btn-row">
            {/* <button className="dialog-btn">
              ProtectOk
            </button> */}
            <BlueberryButton>
              ProtectOk
            </BlueberryButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IconDialog;
