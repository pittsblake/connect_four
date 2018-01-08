import React, { Component } from 'react';
import styled from 'styled-components'
import GridCell from './GridCell'

const Container = styled.div`
   text-align: center;
   margin: 50px auto;
   height: 600px;
   width: 600px;
`

class ReactRedux extends Component {
    state = {
        player1: true,
        player2: false,
        current: 'red',
        // Virtual Board
        board: [
            [], //Column 0
            [], //Column 1
            [], //Column 2
            [], //Column 3
            [], //Column 4
            [], //Column 5
        ]
    }

    pushingTile = (state, action) => {
        if(action.type==='Drop_Tile'){
            console.log('dropping onto col' + action.payload);
            const tile = state.current;
            const col = state.board[action.payload].concat(tile)

            const board = state.board.slice();
            board[action, payload] = col;
        }
        return {
            current: state.current === 'red' ? 'black' : 'red',
        }
    }

    // Keeps Track of Turns
    changePlayer = () => {
        this.state.player1 ? this.setState({player1: false, player2: true}) 
        :
        this.setState({player1: !this.state.player1, player2: !this.state.player2})
    }

    // Keeps the player's turn if a taken cell is clicked again
    remainCurrentPlayer = () => {
        alert('already taken')
    }


    render() {

        // Builds Board

        const cells = [];

        for(let x = 5; x >= 0; x--){
            const row = [];

            for(let y = 0; y <= 6; y++){
                cells.push(<GridCell key={y}
                        x={x} y={y}
                        changePlayer={this.changePlayer} 
                        player1={this.state.player1}
                        player2={this.state.player2}
                        remainCurrentPlayer={this.remainCurrentPlayer}
                        board={this.state.board}
                        dropTile={this.dropTile}
                        />)
            }
            
            cells.push(<div key={x}> {row} </div>)
        }

        return (
            <Container className="App">
                {cells}
            </Container>
        );
    }
}

export default ReactRedux;