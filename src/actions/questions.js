import { saveQuestion } from '../utils/API';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTIONS';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

/* 
I created the addQuestion function based on the following knowledge:
https://knowledge.udacity.com/questions/128681
*/
function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

/* 
I created the handleAddQuestion function based on the following knowledge:
https://knowledge.udacity.com/questions/226439
AND
based on the "handleToggleTweet" function like we did it in Lesson 7: Real World Redux:
*/
export function handleAddQuestion (optionOneText, optionTwoText, author) {
    return (dispatch) => {
        return saveQuestion({
            optionOneText,
            optionTwoText,
            author
        })
        .then((question) => {
            dispatch(addQuestion(question))
        })
        .catch((error) => {
            console.warn('Error in handleAddQuestion ', error);
            alert('There was an error adding the question. Please try again.')
        });
    };
}

