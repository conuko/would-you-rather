import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

/* 
I created the Login Component with the help from the following knowledge posts:
https://knowledge.udacity.com/questions/234946
https://knowledge.udacity.com/questions/508001
https://knowledge.udacity.com/questions/510658
*/

class Login extends Component {
    state = {
        loggedInUser: '',
        open: false,
    };

    handleClose = () => {
        this.setState(() => ({
            open: false
        }));
    };

    handleOpen = () => {
        this.setState(() => ({
            open: true
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
        const { open } = this.state;
        const { loggedInUser } = this.state;
        const { selectUsers } = this.props;
        console.log(this.props);
        return (
            <div>
                <h3 className='center'>WELCOME TO 🔥WOULD YOU RATHER?!🔥 </h3>
                <FormControl onSubmit={this.handleOnSubmit} className="form-control">
                    <InputLabel id="demo-controlled-open-select-label">Select User</InputLabel>
                    <Select
                        labelId="demo-controlled-open-select-label"
                        id="demo-controlled-open-select"
                        open={open}
                        onClose={this.handleClose}
                        onOpen={this.handleOpen}
                        value={loggedInUser}
                        onChange={this.handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                        {selectUsers.map((user) => (
                            <MenuItem
                            value={user.id}
                            key={user.id}
                            label={user.name}
                            onClick={(event) => this.handleChange(event)}
                            >{user.name}</MenuItem>
                        ))}
                    </Select>
                    <Button
                        type="submit"
                        onClick={(event) => this.handleOnSubmit(event)}
                        >
                        Login
                    </Button>
                </FormControl>
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
                };
            });
            return {
                selectUsers: usersToSelect,
            };
}

export default connect(mapStateToProps)(Login);