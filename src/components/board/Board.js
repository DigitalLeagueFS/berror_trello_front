import React from 'react';
import Column from '../column/Column'
import './board.css'
export default function Board() {
    return (
        <div>
            <p>This is a board</p>
            <div className="board">
                <Column />
                <Column />
                <Column />
            </div>
        </div>
    )
}