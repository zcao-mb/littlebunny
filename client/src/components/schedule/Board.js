import React from 'react';
import { BoardHeader } from './BoardHeader';
import { BoardBody } from './BoardBody';
import { BoardFooter } from './BoardFooter';

import './schedule.css';

export class Board extends React.Component {

    render() {
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