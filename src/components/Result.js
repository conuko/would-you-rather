import React, { Component } from 'react';
import { connect } from 'react-redux';

class Result extends Component {
    render() {
        return(
            <div>
                Hello, this is the Result.
            </div>
        );
    };
}

export default connect()(Result);