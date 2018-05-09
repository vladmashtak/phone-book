import { createStore } from 'redux';
import reducer from './reducers';

export const storage = createStore(reducer);
