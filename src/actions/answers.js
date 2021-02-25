export const ADD_ANSWER = 'ADD_ANSWER';

export function addAnswer (authedUser, qid, answer) {
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer,
    };
}

/*
I created this action-creator function the same way the _saveQuestionAnswer function
in the _DATA.js file is created.*/