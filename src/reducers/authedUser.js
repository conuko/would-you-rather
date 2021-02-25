import { SET_AUTHED_USER } from '../actions/authedUser';

export default function authedUser (state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER :
            return action.id
        default: 
            return state;
        
    }
}

/* 
I created the authedUser reducer function the same way we created this function at the chirper (twitter clone)
project during the Real World Redux Lesson.
*/