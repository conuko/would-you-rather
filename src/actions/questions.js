//import { saveQuestion, saveQuestionAnswer } from '../utils/API';

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
export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}