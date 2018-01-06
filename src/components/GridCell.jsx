import React, { Component } from 'react';
import styled from 'styled-components'

const Cell = styled.div`
    height: 40px;
    width: 40px;
    border: solid thin;
    display: inline-block;
    margin: 0px;
    padding: 20px;
    cursor: pointer;
`



class GridCell extends Component {
    // state = {
    //     player1: true,
    //     player2: false,
    //     color: 'white'
    // }

    handleClick = () => {
        console.log(`This is coordinates ${this.props.x},${this.props.y}`)

    }

    render() {
        return (
           
                <Cell onClick={this.handleClick} >

                    <p>{this.props.x}, {this.props.y}</p>
                </Cell>
           
        );
    }
}

export default GridCell;