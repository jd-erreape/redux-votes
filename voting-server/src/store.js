import {createStore} from 'redux';
import reducer from './reducer';

export default function makeStore() {
  console.log(reducer);
  return createStore(reducer);
}
