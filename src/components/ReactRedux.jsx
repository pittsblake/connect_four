import React, { Component } from 'react';
import styled from 'styled-components'
import GridCell from './GridCell'

const Container = styled.div`
   text-align: center;
   margin: 50px auto;
`

class ReactRedux extends Component {
    state = {
        grid: [0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0,
               0, 0, 0, 0, 0, 0, 0]
    }

    render() {
        const cells = [];

        for(let x = 0; x < 6; x++){
            const row = [];

            for(let y = 0; y < 7; y++){
                cells.push(<GridCell x={x} y={y} />)
            }
            
            cells.push(<div> {row} </div>)
        }

        return (
            <Container>
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