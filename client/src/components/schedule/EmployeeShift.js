import React from 'react';

export class EmployeeShift extends React.Component {

    render() {
        var employee = this.props.employee;
        // console.log('EmployeeShift:', employee);

        return (
            <div className="employee-shift">
                <div className="roster-employee pull-left">{employee.name}</div>
                <div className="day-wrapper">
                    {employee.days.map(day =>
                        <div key={day.serialNo} className="day pull-left">
                            {day.shifts.map(shift =>
                                <div className="shift" key={shift.id}>{shift.startTime} - {shift.endTime}</div>
                            )}
                            <div className="add-button" onClick={() => this.addShift(employee.id, day.date)}>+</div>
                        </div>
                    )}
                </div>
            </div>
        );
    }

    addShift = (emp, date) => {
        console.log('add shift to:', emp, date);
    }
}
