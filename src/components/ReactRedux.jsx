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
        player: 'red'
        // player1: true,
        // player2: false,
    }


    changePlayer = () => {
        this.state.player === 'red' ? this.setState({player: 'blue'}) 
        :
        this.setState({player: 'red'})
    }

    remainCurrentPlayer = () => {
        alert('already taken')
    }

    render() {
        const cells = [];

        for(let x = 5; x >= 0; x--){
            const row = [];

            for(let y = 0; y <= 6; y++){
                cells.push(<GridCell className='cols'key={y}
                        x={x} y={y}
                        changePlayer={this.changePlayer} 
                        player1={this.state.player1}
                        player2={this.state.player2}
                        player={this.state.player}
                        remainCurrentPlayer={this.remainCurrentPlayer}
                        />)
            }
            
            cells.push(<div className='rows' key={x}> {row} </div>)
        }

        return (
            <Container >
                {/* {
                    this.state.grid.map((cell) => {
                        return (
                            <Cell>{cell}</Cell>
                        )
                    })
                } */}

                {cells}
            </Container>
        );
    }
}

export default ReactRedux;