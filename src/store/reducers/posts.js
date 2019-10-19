import {POSTS} from '../types/index';

const initialState = null;

export default function posts (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT_LIKES':
      const i = action.index;
      return Object.assign (
        {},
        state + 1,
        {
          increment: action.payload,
        }
        //console.log (state)
      );
    //RETURN UPDATED STATE
    default:
      return state;
  }
}
