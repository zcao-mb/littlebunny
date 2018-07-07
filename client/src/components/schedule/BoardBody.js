import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { actionCreators } from '../../stores/roster';
import { EmployeeShift } from './EmployeeShift';

class BoardBody extends React.Component {

    componentDidMount() {
        this.props.getEmployees();
    }

    render() {
        if(!_.isArray(this.props.employees))
            return null;

        return (
            <div className="board-body">
                {this.props.employees.map(employee =>
                    <EmployeeShift key={employee.id} employee={employee} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({ employees: state.roster.employees});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(BoardBody);