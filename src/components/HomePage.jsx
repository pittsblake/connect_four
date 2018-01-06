import React, { Component } from 'react';
import styled from 'styled-components'

const Body = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px auto;
`

const Container = styled.div`
    background-color: blue;
    height: 600px;
    width: 600px;
`
const Table = styled.table`
    height: 600px;
    width: 600px
`

const ColorOfCell = styled.tbody`
`
const Cell = styled.td`
    background-color: white;
    &:hover {
        box-shadow: 2px 4px 5px grey;
        height: 110px;
        width: 110px;
        background-color: grey;
        cursor: grab;
    }
    &:active {
        cursor: grabbing;
    }
`


class HomePage extends Component {
    state = {
        size: 6,
        color: 'white'
    }

    changeColor = () => {
        this.setState({
            color: 'red'
        })
    }

    render() {
        // Builds table grid
        let rows = [];
        for (let i = 0; i < this.state.size; i++) {
            let rowID = `${i}`
            let cell = []
            for (let j = 0; j < this.state.size; j++) {
                let cellID = `${i}-${j}`
                cell.push(<Cell 
                    key={cellID} 
                    id={cellID} 
                    onClick={this.changeColor}
                    // style={{backgroundColor:this.state.color}}
                    ></Cell>)
            }
            rows.push(<tr key={i} id={rowID}>{cell}</tr>)
        }
        return (
            <Body>
                <h1>Connect Four</h1>
            <Container>
                <div>
                    <div>
                        <Table>
                            <ColorOfCell>
                                {rows}
                            </ColorOfCell>
                        </Table>
                    </div>
                </div>
            </Container>
            </Body>
        );
    }
}

export default HomePage;