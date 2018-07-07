import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../store/test';

class Test extends React.Component {

    componentWillMount() {
        this.props.getValues();
    }

    render() {
        return (
            <div>
                <p>Test Component</p>
                <ul>
                    {this.props.values.map(value => 
                        <li key={value}>{value}</li>
                    )}
                </ul>
                <button className="btn btn-primary">Test Button</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({ values: state.values});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Test);