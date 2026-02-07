// State machine for news management flow
export type FlowStep = 'CLOSED' | 'PIN' | 'OPTIONS' | 'ADD' | 'REMOVE';

export interface FlowState {
  step: FlowStep;
  pin: string;
  pinError: string;
  // Add form state
  month: string;
  day: string;
  year: string;
  title: string;
  description: string;
  formError: string;
  // Remove state
  selectedNewsToRemove: string;
  removeError: string;
}

export const initialFlowState: FlowState = {
  step: 'CLOSED',
  pin: '',
  pinError: '',
  month: '',
  day: '',
  year: '',
  title: '',
  description: '',
  formError: '',
  selectedNewsToRemove: '',
  removeError: '',
};

export type FlowAction =
  | { type: 'START_FLOW' }
  | { type: 'SUBMIT_PIN'; pin: string; correctPin: string }
  | { type: 'OPEN_ADD' }
  | { type: 'OPEN_REMOVE' }
  | { type: 'CLOSE_FLOW' }
  | { type: 'SET_PIN'; pin: string }
  | { type: 'SET_FORM_FIELD'; field: 'month' | 'day' | 'year' | 'title' | 'description'; value: string }
  | { type: 'SET_FORM_ERROR'; error: string }
  | { type: 'SET_SELECTED_NEWS'; title: string }
  | { type: 'SET_REMOVE_ERROR'; error: string }
  | { type: 'RESET_FORM' }
  | { type: 'RESET_REMOVE' };

export function flowReducer(state: FlowState, action: FlowAction): FlowState {
  switch (action.type) {
    case 'START_FLOW':
      // Reset everything and open PIN dialog
      return {
        ...initialFlowState,
        step: 'PIN',
      };

    case 'SET_PIN':
      return {
        ...state,
        pin: action.pin,
        pinError: '',
      };

    case 'SUBMIT_PIN':
      if (action.pin === action.correctPin) {
        // Correct PIN: move to OPTIONS
        return {
          ...state,
          step: 'OPTIONS',
          pinError: '',
        };
      } else {
        // Incorrect PIN: stay in PIN with error
        return {
          ...state,
          pinError: 'Incorrect PIN. Please try again.',
        };
      }

    case 'OPEN_ADD':
      // Transition from OPTIONS to ADD
      return {
        ...state,
        step: 'ADD',
        formError: '',
      };

    case 'OPEN_REMOVE':
      // Transition from OPTIONS to REMOVE
      return {
        ...state,
        step: 'REMOVE',
        selectedNewsToRemove: '',
        removeError: '',
      };

    case 'CLOSE_FLOW':
      // Close everything and reset to initial state
      return initialFlowState;

    case 'SET_FORM_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        formError: '',
      };

    case 'SET_FORM_ERROR':
      return {
        ...state,
        formError: action.error,
      };

    case 'SET_SELECTED_NEWS':
      return {
        ...state,
        selectedNewsToRemove: action.title,
        removeError: '',
      };

    case 'SET_REMOVE_ERROR':
      return {
        ...state,
        removeError: action.error,
      };

    case 'RESET_FORM':
      return {
        ...state,
        month: '',
        day: '',
        year: '',
        title: '',
        description: '',
        formError: '',
      };

    case 'RESET_REMOVE':
      return {
        ...state,
        selectedNewsToRemove: '',
        removeError: '',
      };

    default:
      return state;
  }
}
