import React, { Component } from 'react';
import styled from 'styled-components'

const Cell = styled.div`
    /* height: 40px;
    width: 40px;
    border: solid thin;
    display: inline-block;
    margin: 0px;
    padding: 20px;
    cursor: pointer; */
`



class GridCell extends Component {
    state = {
        color: 'white',
        cellTaken: false
    }
    

    verticalWinLogic = () => {
       
        for(let i = 0; i <= this.props.y; i++){
            if(this.props.x === 3 && this.props.x === this.props.player1){
                alert('you win!')
            }
    }}


    handleClick = () => {
        console.log(`This is coordinates ${this.props.x},${this.props.y}`)
        
        // this.verticalWinLogic()

        if(this.state.cellTaken === true){
            this.props.remainCurrentPlayer()
        } else if(this.state.cellTaken === false) {
            if(this.props.player1){
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
           <div>
                <Cell 
                onClick={this.handleClick} style={{backgroundColor: this.state.color}} >
                {this.props.setUpBoard}    
                </Cell>
           </div>
        );
    }
}

export default GridCell;