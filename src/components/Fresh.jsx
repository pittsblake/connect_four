import React, { Component } from 'react';

class Fresh extends Component {
    state = {
        player: 'red',
    }

    createBoard = () => {
        let ROWS = 6;
        let COLS = 7;
        let x = 0;
        let cols

        for (let x = 0; x < ROWS; x++) {
            const rows = [];
            if (x < ROWS) {
                rows.push(<div>hi</div>)
                console.log(rows)
            } else {
                return rows
            }
            for (let y = 0; y < COLS; y++) {
                cols = <div className='col_empty'></div>
                console.log(cols.length)
            }
        }
    }
    render() {
        return (
            <div>
                {this.createBoard()}
            </div>
        );

    }
}

export default Fresh;