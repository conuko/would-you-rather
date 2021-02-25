export const ADD_ANSWER = 'ADD_ANSWER';

export function addAnswer (authedUser, qui, answer) {
    return {
        type: ADD_ANSWER,
        authedUser,
        qui,
        answer,
    };
}