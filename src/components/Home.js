import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <h3 className='center'>Questions</h3>
                <ul className='home-list'>
                    <div className='unanswered-questions'>
                        {this.props.unansweredQuestions.map((id) => (
                            //{/* <HomeCard key={id} id={id} />*/}
                            <li key={id}>
                                <div>UNANSWERED-QUESTION ID: {id}</div> 
                                {/* anstatt des li Elements und des div, kommt hier der HOMECARDS-Component rein */}
                            </li>
                        ))}
                    </div>
                    <div className='answered-questions'>
                        {this.props.answeredQuestions.map((id) => (
                            //{/* <HomeCard key={id} id={id} />*/}
                            <li key={id}>
                                <div>ANSWERED-QUESTION ID: {id}</div> 
                                {/* anstatt des li Elements und des div, kommt hier der HOMECARDS-Component rein */}
                            </li>
                        ))}
                    </div>
                </ul>
            </div>
        );
    };
}

/* 
I created the Home component and the split between answered and unanswered questions based on the following knowledge:
https://knowledge.udacity.com/questions/448557
https://knowledge.udacity.com/questions/364984
*/

function mapStateToProps({ users, authedUser, questions}) {
    // give out the answered questions Ids from the logedIn user (authedUser):
    const answeredQuestions = Object.keys(users[authedUser].answers)
        .map(answerId => {
            return questions[answerId].id;
        })
    // sort the answered questions by there timestamp:
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    // give out the unanswered questions Ids from the logedIn user (authedUser):
    const unansweredQuestions = Object.keys(questions)
        .map(question => {
            return question;
        })
        // filter out the unanswered questions:
        .filter((question) => {
            return !answeredQuestions.includes(question)
        })
    // sort the unanswered questions by there timestamp:
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp)

    return {
        authedUser,
        answeredQuestions,
        unansweredQuestions,
    }
}

export default connect(mapStateToProps)(Home);