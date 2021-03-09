import { RECEIVE_QUESTIONS, ADD_QUESTION } from '../actions/questions';
import { ADD_ANSWER } from '../actions/answers';

export default function questions (state = {}, action) {
    switch (action.type) {
        case RECEIVE_QUESTIONS :
            return {
                ...state,
                ...action.questions,
            };
        /* 
        I created the reducer function and the case ADD_QUESTION with the help from the following resource:
        https://knowledge.udacity.com/questions/128681
        AND
        based on the TOGGLE_TWEET case in the tweets.js reducer from Lesson 7: Real World Redux:
        */
        case ADD_QUESTION :
            return {
                ...state,
                [action.question.id]: {
                    ...action.question,
                }
            };
        /* 
        I created the ADD_ANSWER case to add an answer to a question with the help from the following resource:
        https://knowledge.udacity.com/questions/150877
        AND
        based on the TOGGLE_TWEET case in the tweets.js reducer from Lesson 7: Real World Redux:
        */
        case ADD_ANSWER :
            return {
                ...state,
                [action.qid]: {
                    ...state[action.qid],
                    [action.answer]: {
                        ...state[action.qid][action.answer],
                        votes: [...state[action.qid][action.answer].votes, action.authedUser]
                    }
                }
            };
        default :
            return state;
    }
}