import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';


import { EmployeeShift } from './EmployeeShift';

class BoardBody extends React.Component {

    render() {
        if(!_.isArray(this.props.employees)) return null;

        var employees =  this.props.employees.map(employee => {
            return this.buildEmployeeData(employee);
        });
        
        return (
            <div className="board-body">
                {employees.map(employee =>
                    <EmployeeShift key={employee.id} employee={employee} />
                )}
            </div>
        );
    }

    // return 
    buildEmployeeData = (employee) => {

        if(!employee || !employee.id) return employee;
        if(!_.isArray(this.props.days)) return employee;

        employee.days = this.props.days.map(day => {
            const d = _.clone(day);
            d.shifts = _.filter(this.props.shifts, function(s) { 
                return s.employeeId === employee.id && s.date === day.date;  
            });
            return d;
        });

        return employee;
    }
}

const mapStateToProps = state => ({ 
    employees: state.roster.employees,
    days: state.roster.days,
    shifts: state.roster.shifts
});

export default connect(
    mapStateToProps
)(BoardBody);