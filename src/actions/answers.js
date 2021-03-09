import { saveQuestionAnswer } from '../utils/API';

export const ADD_ANSWER = 'ADD_ANSWER';

/* 
I created the addQuestion function based on the following knowledge:
https://knowledge.udacity.com/questions/128681
https://knowledge.udacity.com/questions/226439
*/
function addAnswer ({ authedUser, qid, answer }) {
    return {
        type: ADD_ANSWER,
        authedUser,
        qid,
        answer,
    };
}

/* 
I created the handleAddAnswer function based on the following knowledge:
https://knowledge.udacity.com/questions/226439
AND
based on the "handleToggleTweet" function like we did it in Lesson 7: Real World Redux:
*/
export function handleAddAnswer (info) {
    return (dispatch) => {
        dispatch(addAnswer(info));

        return saveQuestionAnswer({
            authedUser: info.authedUser,
            qid: info.id,
            answer: info.answer
        }).catch((error) => {
            console.warn('Error in handleAddAnswer ', error);
            dispatch(addAnswer(info));
            alert('There was an error adding the answer. Please try again');
        }); 
    };
}
/*
I created this action-creator function the same way the _saveQuestionAnswer function
in the _DATA.js file is created.*/