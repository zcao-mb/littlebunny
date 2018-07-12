import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../stores/roster';

import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';
import { BoardFooter } from './BoardFooter';

import './board.css';

class Board extends React.Component {

    componentDidMount() {
        this.props.getEmployees().then(function() {
            console.log('employees loaded.');
        });
        this.props.searchDays('2018-7-1', '2018-7-7').then(function() {
            console.log('days loaded.');
        });
    }

    render() {
        if(this.props.loading) return ( <div>Loading...</div> );

        return (
            <div className="roster-board">
                <div className="scroll-wrapper weekly-view">
                    <BoardHeader />
                    <BoardBody />
                </div>
                <BoardFooter />
            </div>
        );
    }
} 

const mapStateToProps = state => ({ 
    loading: state.roster.loading
});

export default connect(
    mapStateToProps,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Board);