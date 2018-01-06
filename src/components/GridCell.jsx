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


    
    handleClick = () => {
        console.log(`This is coordinates ${this.props.x},${this.props.y}`)
        if(this.state.cellTaken === false) {
            this.props.player1 ? this.setState({color: 'red', cellTaken: true}) : this.setState({color: 'blue', cellTaken: true
        })}
        
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