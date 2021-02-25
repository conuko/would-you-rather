import { combineReducers } from 'redux';
import authedUser from './authedUser';
import users from './users';
import questions from './questions';
import answers from './answers';

export default combineReducers({
    authedUser,
    users,
    questions,
    answers
});