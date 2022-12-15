import { createStore } from 'redux';
import  Reducer from '../Redux/reducers';

export const store = createStore( Reducer);

export default store;
