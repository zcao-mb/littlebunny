import React from 'react';
import { connect } from 'react-redux';

import BoardHeader from './BoardHeader';
import BoardBody from './BoardBody';
import { BoardFooter } from './BoardFooter';

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
            </div>
        );
    }
} 

const mapStateToProps = state => ({ 
    loading: state.schedule.view.data.loading
});

export default connect(
    mapStateToProps
)(Board);