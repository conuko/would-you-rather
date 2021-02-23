import { saveQuestion, saveQuestionAnswer } from '../utils/API';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTIONS';
export const ADD_QUESTION_ANSWER = 'ADD_QUESTION_ANSWER';

export function receiveQuestions (questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    };
}

export function addQuestion (question) {
    return {
        type: ADD_QUESTION,
        question,
    };
}

export function addQuestionAnswer (authedUser, qui, answer) {
    return {
        type: ADD_QUESTION_ANSWER,
        authedUser,
        qui,
        answer,
    };
}