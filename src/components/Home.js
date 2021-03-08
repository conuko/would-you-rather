import React, { Component } from 'react';
import { connect } from 'react-redux';
import HomeCard from './HomeCard';

import styled from 'styled-components';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const HomePage = styled.div`
    margin: auto;
    padding-top: 150px;
    position: relative;
`;

const ButtonContainer = styled.div`
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

class Home extends Component {
    /*
    To switch between Unanswered and Answered Questions I created a initialise state with a boolean set to false like it is done in the following knowledge from stackoverflow:
    https://stackoverflow.com/questions/47406895/display-a-component-on-clicking-a-button-in-react
    */
    state = {
        showAnsweredQuestions: false
    }
    /*
    To switch between Unanswered and Answered Questions I created the following two event handlers like it is done in the following knowledge from stackoverflow:
    https://stackoverflow.com/questions/47406895/display-a-component-on-clicking-a-button-in-react
    */
    handleUnansweredQuestions = () => {
        this.setState({
            showAnsweredQuestions: false
        });
    };

    handleAnsweredQuestions = () => {
        this.setState({
            showAnsweredQuestions: true
        });
    };

    render () {
        const { showAnsweredQuestions } = this.state;
        const { unansweredQuestions, answeredQuestions } = this.props
        console.log(this.props);
        return (
            <HomePage>
                <ButtonContainer>
                    <Button
                        color="primary"
                        variant={showAnsweredQuestions === false ? "contained" : "outlined"}
                        onClick={this.handleUnansweredQuestions}
                        >
                        Unanswered Questions
                    </Button>
                    <Button
                        color="primary"
                        variant={showAnsweredQuestions === true ? "contained" : "outlined"}
                        onClick={this.handleAnsweredQuestions}
                        >
                        Answered Questions
                    </Button>
                </ButtonContainer>
                <ul className='home-list'>
                {showAnsweredQuestions === false && (
                    <div className='unanswered-questions'>
                        {unansweredQuestions.map((id) => (
                            <HomeCard key={id} id={id} /> 
                        ))}
                    </div>
                )}
                {showAnsweredQuestions === true && (
                    <div className='answered-questions'>
                        {answeredQuestions.map((id) => (
                            <HomeCard key={id} id={id} />
                        ))}
                    </div>
                )}
                </ul>
            </HomePage>
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
    };
}

export default connect(mapStateToProps)(Home);