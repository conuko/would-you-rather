import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {
    render () {
        console.log(this.props);
        return (
            <div>
                <h3 className='center'>Users</h3>
                <ul className='home-list'>
                    {this.props.userId.map((id) => (
                        <li key={id}>
                            <div>USER ID: {id}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    };
}

function mapStateToProps ({ users }) {
    return {
        userId: Object.keys(users)
    }
}

export default connect(mapStateToProps)(Login);