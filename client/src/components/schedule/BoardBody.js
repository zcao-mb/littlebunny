import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


import { EmployeeShift } from './EmployeeShift';

class BoardBody extends React.Component {

    render() {
        if(!_.isArray(this.props.employees)) return null;

        return (
            <div className="board-body">
                {this.props.employees.map(employee =>
                    <EmployeeShift key={employee.id} employee={employee} />
                )}
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    employees: state.roster.employees,
    days: state.roster.days
});

export default connect(
    mapStateToProps
)(BoardBody);