import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';
import styled from 'styled-components';

import { StylesProvider } from '@material-ui/core/styles';
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

const FormWrapper = styled.div`
    position: relative;
`;

const StyledButton = styled(Button)`
    margin: 20px auto;
    background-color: #6772e5;
    color: #fff;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
    padding: 7px 14px;
    &:hover {
    background-color: #5469d4;
    }
`;

const StyledFormControl = styled(FormControl)`
  width: 300px;
  margin: 0 auto;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const H3 = styled.h3`
    font-size: 54px;
    font-weight: bold;
    text-align: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;

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

    /*     
    created the handleOnSubmit method with the help of the following knowledge:
    https://knowledge.udacity.com/questions/508001
    https://knowledge.udacity.com/questions/510658
    */
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
            <FormWrapper>
                <H3>🔥WOULD YOU RATHER?!🔥 </H3>
                <StylesProvider injectFirst>
                    <StyledFormControl onSubmit={this.handleOnSubmit} className="form-control">
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
                        <StyledButton
                            type="submit"
                            onClick={loggedInUser !== "" && ((event) => this.handleOnSubmit(event))}
                            disabled={loggedInUser === "" ? true : false}
                            >
                            Login
                        </StyledButton>
                    </StyledFormControl>
                </StylesProvider>
            </FormWrapper>
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