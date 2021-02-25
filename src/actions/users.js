export const RECEIVE_USERS = 'RECEIVE_USERS';
export const QUESTION_TO_USER = 'QUESTION_TO_USER';
export const ANSWER_TO_USER = 'ANSWER_TO_USER';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users,
    };
}

export function questionToUser (id) {
    return {
        type: QUESTION_TO_USER,
        id,
    };
}

// I create this function with the same parameters as the _saveQuestionAnswer function from _Data.js:
export function answerToUser ({ authedUser, qid, answer }) {
    return {
        type: ANSWER_TO_USER,
        authedUser,
        qid,
        answer,
    };
}