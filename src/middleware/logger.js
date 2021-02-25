const logger = (store) => (next) => (action) => {
    console.group(action.type)
        console.log('The action: ', action);
        const returnValue = next(action);
        console.log('The new state ', store.getState());
    console.groupEnd();
    return returnValue;
}

export default logger;

/* 
I created the logger middleware the same way we created it at the chirper (twitter clone)
project during the Real World Redux Lesson.
*/