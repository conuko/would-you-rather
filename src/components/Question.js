import React, { Component } from 'react';
import { connect } from 'react-redux';
import Result from './Result';

class Question extends Component {
    render() {
        return(
            <div>
                Hello, this is the Question.
            </div>
        );
    };
}

// mapStateToProps function's second argument (ownProps) will be an object that has the id property passed to the HomeCard component as props from the Home component:
function mapStateToProps ({ authedUser, users, questions }, { id }) {
    // select the question with the id props passed to the from Home to the HomeCard component
    const question = questions[id];
    const avatarURL = users[question.author].avatarURL;
    const name = users[question.author].name;

    return {
        avatarURL,
        name,
        question,
        authedUser
    };
}

export default connect(mapStateToProps)(Question);