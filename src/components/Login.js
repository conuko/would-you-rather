import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
/* 
========================================
Import styles from @material-ui:
========================================
*/
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
/* 
===========================================
*/

/* 
I created the Login Component with the help from the knowledge:
https://knowledge.udacity.com/questions/234946
*/

class Login extends Component {
    state = {
        loggedInUser: '',
        anchorEl: null

    };

    handleClick = (event) => {
        this.setState(() => ({
            anchorEl: event.currentTarget
        }));
    };

    handleClose = () => {
        this.setState(() => ({
            anchorEl: null
        }));
    };

    handleChange = (event) => {
        this.setState(() => ({
            loggedInUser: event.target.value
        }));
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const { dispatch } = this.props;
        const { loggedInUser } = this.state;
        dispatch(setAuthedUser(loggedInUser));
        this.setState({ loggedInUser: '' });
      };

    render () {
        const { anchorEl } = this.state;
        const { selectUsers } = this.props;
        console.log(this.props);
        return (
            <div>
                <h3 className='center'>Please choose a User to Login</h3>
                {/* <ul className='home-list'>
                    {this.props.usersToSelect.map((id) => (
                        <li key={id}>
                            <div>USER ID: {id}</div>
                        </li>
                    ))}
                </ul> */}
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                    Choose User
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onSubmit={this.handleOnSubmit}
                    onChange={this.handleChange}
                    onClose={this.handleClose}
                >
                {selectUsers.map((user) => (
                    <MenuItem
                    value={user.id}
                    key={user.id}
                    label={user.name}
                    onClick={this.handleClose}
                    >{user.name}</MenuItem>
                ))}
                </Menu>
            </div>
        );
    };
}
/* 
get all the users from the redux store, so we can select one and make it the "authedUser"
(I wrote this excactly the way we did it in the Real World Redux Section (Chirper Project)): 
*/
function mapStateToProps ({ users }) {
        const usersToSelect = Object.keys(users)
            .map(user => {
                return {
                    id: users[user].id,
                    name: users[user].name,
                    picture: users[user].avatarURL
                }
            })
            return {
                selectUsers: usersToSelect,
            };
}

export default connect(mapStateToProps)(Login);