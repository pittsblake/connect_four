import React, { Component } from 'react';
import styled from 'styled-components'
import GridCell from './GridCell'

const Container = styled.div`
   text-align: center;
   margin: 50px auto;
   height: 600px;
   width: 600px;
`
const GameGrid = styled.div`
display: table;         
width: auto;                  
border: 2px solid #666666;   
font-size: 0px;
`

const GameRows = styled.div`
display: table-row;
border: 2px solid #666666; 
width: auto;
clear: both;
`

const GameColumns = styled.div`
float: left; 
display: table-column; 
border: 2px solid #666666;         
width: 56px;       
height: 56px;  
text-align: center;
`

const Cell = styled.div`
height: 40px;
width: 40px;
border: solid thin;
display: inline-block;
margin: 0px;
padding: 20px;
cursor: pointer;
`

class Main extends Component {
    state = {
        player1: true,
        player2: false,
        board: [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0]
        ]

    }

    changePlayer = () => {
        this.state.player1 ? this.setState({ player1: false, player2: true })
            :
            this.setState({ player1: !this.state.player1, player2: !this.state.player2 })
    }

    remainCurrentPlayer = () => {
        alert('already taken')
    }

    handleClick = () => {
        console.log(`This is coordinates ${this.props.x},${this.props.y}`)
        
        // this.verticalWinLogic()

        if(this.state.cellTaken === true){
            this.remainCurrentPlayer()
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

        const setUpBoard = 
        <Container>
            <GameGrid>
                {this.state.board.map((array, index) => {
                    return <GameRows
                        key={index}>{array.map((each, index) => {
                            return <GameColumns key={index} className={each} onClick={this.handleClick}>{each}</GameColumns>
                        })}</GameRows>
                })}
            </GameGrid>
        </Container>

        return (
            <div >

                <GridCell 
                    setUpBoard={setUpBoard}
                    player1={this.state.player1}
                    player2={this.state.player2}
                    remainCurrentPlayer={this.remainCurrentPlayer}
                    changePlayer={this.changePlayer}
                />
        
            </div>
        );
    }
}

export default Main;