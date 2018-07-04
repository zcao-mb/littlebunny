import React from 'react';
import { BoardHeader } from './BoardHeader';
import { BoardBody } from './BoardBody';

import './schedule.css';

export class Board extends React.Component {

    render() {
        return (
            <div className="roster-board">
                <BoardHeader />
                <BoardBody />
            </div>
        );
    }
} 