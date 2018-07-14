import React from 'react';
import Board from './Board';
import BoardControl from './BoardControl';

export class Schedule extends React.Component {
    render() {
        return (
            <div>
                <BoardControl />
                <Board />
            </div>
        );
    }
}