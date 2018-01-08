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

    
    // checkForWinner = (x, y) => {

    //     checkWin = (directionA, directionB) => {
    //         const total = 1 + 
    //             checkDirection(a)+
    //             checkDirection(b);
    //             if(total >= 4) {
    //                 return
    //             }
    //     }
    //     checkVerticals = () =>{

    //         return checkWin({i: -1, j: 0}, {i:1, j:0});
    //     }
    //     return checkVerticals();
    // }


    eventListeners = () => {
        
    }

    handleClick = () => {
        this.state.color = this.props.player

        console.log(`This is coordinates ${this.props.x},${this.props.y}`)
        
        
        if(this.props.player === 'red'){
            this.props.changePlayer()   
        } else if (this.props.player === 'blue'){
            this.props.changePlayer()
        }

        // if(this.state.cellTaken === true){
        //     this.props.remainCurrentPlayer()
        // } else if(this.state.cellTaken === false) {
        //     if(this.props.player1){
        //         this.setState({color: 'red', cellTaken: true})
        //         this.props.changePlayer()
        //     } else if(this.props.player2) {
        //         this.setState({color: 'blue', cellTaken: true})
        //         this.props.changePlayer()
        //     }
        // }
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