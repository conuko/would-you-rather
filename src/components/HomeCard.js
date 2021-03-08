import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { StylesProvider } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const HomeCardContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledCard = styled(Card)`
    width: 300px;
    margin: 10px auto;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const Title = styled(Typography)`
    fontSize: 14;
`;

const Pos = styled(Typography)`
    marginBottom: 12;
`;

const StyledAvatar = styled(Avatar)`
    
`;

class HomeCard extends Component {
    render() {
        const { id, avatarURL, name, question } = this.props;
        return (
            <StylesProvider injectFirst>
                <HomeCardContainer>
                    <StyledCard>
                        <CardContent>
                            <StyledAvatar src={avatarURL} alt={name} />
                            <Title color="textSecondary" gutterBottom>
                                {name}
                            </Title>
                            <Typography variant="h5" component="h2">
                                Would you rather...
                            </Typography>
                            <Pos color="textSecondary">
                                {question.optionOne.text}
                            </Pos>
                            <Typography variant="body2" component="p">
                                OR
                                <br />
                                ...
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Show More</Button>
                        </CardActions>
                    </StyledCard>
                </HomeCardContainer>
            </StylesProvider>
        )
    }
}

// mapStateToProps function's second argument (ownProps) will be an object that has the id property passed to the HomeCard component as props from the Home component:
function mapStateToProps ({ users, questions }, { id }) {
    // select the question with the id props passed to the from Home to the HomeCard component
    const question = questions[id];
    const avatarURL = users[question.author].avatarURL;
    const name = users[question.author].name;

    return {
        avatarURL,
        name,
        question
    };
}

export default connect(mapStateToProps)(HomeCard);