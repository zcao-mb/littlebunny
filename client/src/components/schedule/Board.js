import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';
import { BoardFooter } from './BoardFooter';
import EditShiftDialog from './EditShiftDialog';

import * as scheduleActionCreators from '../../stores/schedule/actions';

import './board.css';

class Board extends React.Component {

    render() {
        if(this.props.loading) return ( <div>Loading...</div> );

        return (
            <div className="roster-board">
                <div className="scroll-wrapper weekly-view">
                    <BoardHeader />
                    <BoardBody />
                </div>
                <BoardFooter />
                <EditShiftDialog open={this.props.editShiftState.editing} handleClose={(e) => this.closeShiftDialog(e) } />
            </div>
        );
    }

    closeShiftDialog = (e) => {
        console.log('edit shift dialog is closing: ', e);
        this.props.saveShift();
    }
} 

const mapStateToProps = state => ({ 
    loading: state.schedule.view.loading,
    editShiftState: state.schedule.edit
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(scheduleActionCreators, dispatch)
)(Board);