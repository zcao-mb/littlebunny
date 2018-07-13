import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';

import { actionCreators as rosterUiActionCreators } from '../../stores/rosterUi.editShift';

import EmployeeShift from './EmployeeShift';
import EditShiftDialog from './EditShiftDialog';

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
                <EditShiftDialog open={this.props.editShiftState.status==='editing'} handleClose={(e) => this.closeShiftDialog(e) } />
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

    
    closeShiftDialog = (e) => {
        console.log('edit shift dialog is closing: ', e);
        this.props.saveShift();
    }
}

const mapStateToProps = state => ({ 
    employees: state.roster.employees,
    days: state.roster.days,
    shifts: state.roster.shifts,
    editShiftState: state.rosterUi.editShift
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(rosterUiActionCreators, dispatch)
)(BoardBody);