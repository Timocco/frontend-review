//
// store.ts
//

import { createStore } from 'redux';

// Define the shape of the state
interface CounterState {
  value: number;
}

// Define the initial state
const initialState: CounterState = {
  value: 0,
};

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Define action creators
interface IncrementAction {
  type: typeof INCREMENT;
}

interface DecrementAction {
  type: typeof DECREMENT;
}

export type CounterActionTypes = IncrementAction | DecrementAction;

export const increment = (): IncrementAction => ({ type: INCREMENT });
export const decrement = (): DecrementAction => ({ type: DECREMENT });

// Define the reducer
function counterReducer(
  state = initialState,
  action: CounterActionTypes
): CounterState {
  switch (action.type) {
    case INCREMENT:
      return { value: state.value + 1 };
    case DECREMENT:
      return { value: state.value - 1 };
    default:
      return state;
  }
}

// Create the Redux store
export const store = createStore(counterReducer);

//
// App.tsx
//

import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { store, increment, decrement } from './store';

// Define a selector for the state
const selectValue = (state: { value: number }) => state.value;

const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectValue);

  return (
    <div>
      <h1>Counter: {value}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

const App: React.FC = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;