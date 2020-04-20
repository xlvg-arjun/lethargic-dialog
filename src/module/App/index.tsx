import React, { useState } from 'react';

import '../../lib/core';
import IconDialog from '../../lib/components/IconDialog';
import Actions from '../../lib/types/Actions';
import Icons from '../../lib/types/Icons';

function App() {
  const [dialogOpen, set_dialogOpen] = useState(true);
  const closeDialog = () => { set_dialogOpen(false); };
  return (
    <main>
      {dialogOpen && <IconDialog Title='Titular' Description='Foolproof Description' IconType={Icons.Success} closeDialog={closeDialog} actions={
        [
          { ActionType: Actions.Success, Label: 'PRotect Everyone', Action: () => {}, KeepAlive: true },
          { ActionType: Actions.Confirm, Label: 'Protect', Action: () => {}, KeepAlive: true },
          { ActionType: Actions.Danger, Label: 'Close', Action: (closingFnProvided: Function) => { closingFnProvided() }, KeepAlive: false }
        ]
      }/>}
    </main>
  );
}

export default App;
