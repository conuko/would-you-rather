import { ADD_ANSWER } from '../actions/answers';

export default function answers(state = {}, action) {
    switch(action.type) {
        case ADD_ANSWER :
            return {

            }
        default :
            return state;
    }
}