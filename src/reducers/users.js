import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION } from '../actions/questions';
import { ADD_ANSWER } from '../actions/answers';

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            };
        /* 
        I created the ADD_QUESTION case with the help from the following resources:
        https://knowledge.udacity.com/questions/226439
        https://knowledge.udacity.com/questions/150877
        AND
        based on the TOGGLE_TWEET case in the tweets.js reducer from Lesson 7: Real World Redux:
        */
        case ADD_QUESTION :
            return { 
                ...state,
                [action.question.author]: {
                    ...state[action.question.author],
                    questions: state[action.question.author].questions.concat([action.question.id])
                }
            };
        /* 
        I created the ADD_ANSWER case to add an answer to a user with the help from the following resource:
        https://knowledge.udacity.com/questions/150877
        AND
        based on the TOGGLE_TWEET case in the tweets.js reducer from Lesson 7: Real World Redux:
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