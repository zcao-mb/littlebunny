import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as scheduleActions from '../../stores/schedule/actions';

class BoardControl extends React.Component {

    componentDidMount() {
        this.props.fetchSchedule('default', '2018-7-1', '2018-7-7');
    }

    render() {

        console.log('schedule: ', this.props.schedule);

        return (
            <div className="board-control">
                Board Control
            </div>
        );
    }
}

const mapStateToProps = state => ({ 
    schedule: state.schedule
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(scheduleActions, dispatch)
)(BoardControl);