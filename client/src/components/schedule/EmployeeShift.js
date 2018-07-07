import React from 'react';

export class EmployeeShift extends React.Component {

    render() {
        return (
            <div className="employee-shift">
                <div className="roster-employee pull-left">{this.props.employee.name}</div>
                <div className="day-wrapper">
                    <div className="day pull-left">Day 1</div>
                    <div className="day pull-left">Day 2</div>
                    <div className="day pull-left">Day 3</div>
                    <div className="day pull-left">Day 4</div>
                    <div className="day pull-left">Day 5</div>
                    <div className="day pull-left">Day 6</div>
                    <div className="day pull-left">Day 7</div>
                </div>
            </div>
        );
    }
}