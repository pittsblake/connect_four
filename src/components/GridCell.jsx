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
    state = {
        color: 'white',
        cellTaken: false
    }


    cellTaken = (col) => {
        this.props.x
    }

    // Checks for vertical Win

    verticalWin = () => {
        if(this.props.x === 3){
            alert("win!")
        }
    }

    handleClick = () => {
        console.log(`This is Column is ${this.props.y}`)
        
        // Check for Win
        this.verticalWin()

        // If no win, allow players to take cells
        if(this.state.cellTaken === true){
            this.props.remainCurrentPlayer()
        } else if(this.state.cellTaken === false) {
            if(this.props.player1){

                //push x,y coordinates to Virtual Board state

                this.setState({color: 'red', cellTaken: true})
                this.props.changePlayer()
            } else if(this.props.player2) {
                this.setState({color: 'blue', cellTaken: true})
                this.props.changePlayer()
            }
        }
    }

    render() {
        return (
           
                <Cell onClick={this.handleClick} style={{backgroundColor: this.state.color}} >
                    <p>{this.props.x}, {this.props.y}</p>
                </Cell>
           
        );
    }
}

export default GridCell;