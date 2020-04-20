import ActionType from './Actions';

interface Action {
  ActionType: ActionType;
  Label: string;
  Action: Function;
  KeepAlive: boolean;
}

export default Action;
