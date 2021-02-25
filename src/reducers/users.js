import { RECEIVE_USER } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';
import { ADD_ANSWER } from '../actions/answers';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USER :
            return {
                ...state,
                ...action.users
            };
        /* 
        I created the ADD_QUESTION case with the help from the following resources:
        https://knowledge.udacity.com/questions/226439
        https://knowledge.udacity.com/questions/150877
        */
        case ADD_QUESTION :
            return { 
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat(action.question.id)
                }
            };
        /* 
        I created the ADD_ANSWER case with the help from the following resource:
        https://knowledge.udacity.com/questions/150877
        */
        case ADD_ANSWER :
            return {
                ...state,
                [action.authedUser]: {
                    ...state[action.authedUser],
                    answers: {
                        ...state[action.authedUser].answers,
                        [action.qid]: action.answer
                    }
                }
            };

        default :
            return state;
    };
}