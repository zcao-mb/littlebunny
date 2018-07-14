import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import moment from 'moment';

class BoardHeader extends React.Component {

    render() {

        if(!_.isArray(this.props.days)) return null;

        return (
            <div className="board-header">
                <div className="roster-employee pull-left">Employee</div>
                <div className="day-wrapper">
                    {this.props.days.map(day =>
                        <div key={day.serialNo} className="day pull-left">{ moment(day.date).format('ddd D MMM')}</div>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    days: state.schedule.view.data.days
});

export default connect(
    mapStateToProps
)(BoardHeader);