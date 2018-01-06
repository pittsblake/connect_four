import React, { Component } from 'react';
import styled from 'styled-components'
import GridCell from './GridCell'

const Container = styled.div`
   text-align: center;
   margin: 50px auto;
`

class ReactRedux extends Component {
    state = {
        color: 'white',
        player1: true,
        player2: false,
    }

    handleClick = () => {
        this.state.player1 ? this.setState({player1: false, player2: true}) 
        :
        this.setState({player1: !this.state.player1, player2: !this.state.player2})
    }

    render() {
        const cells = [];

        for(let x = 5; x >= 0; x--){
            const row = [];

            for(let y = 0; y <= 6; y++){
                cells.push(<GridCell key={y} x={x} y={y} player1={this.state.player1} player2={this.state.player2}/>)
            }
            
            cells.push(<div key={x}> {row} </div>)
        }

        return (
            <Container onClick={this.handleClick}>
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