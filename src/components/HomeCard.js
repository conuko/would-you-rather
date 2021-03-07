import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeCard extends Component {
    render() {
        return (
            <div className='home-card'>

            </div>
        )
    }
}

function mapStateToProps ({ users, questions }, { id }) {
    const question = questions[id]

    return {
        authedUser,
        tweet: 
    }
}

export default connect()(HomeCard);