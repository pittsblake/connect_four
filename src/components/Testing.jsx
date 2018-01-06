import React, { Component } from 'react';
import styled from 'styled-components'

const Cell = styled.td`
    border: solid thin;
    height: 80px;
    width: 80px;
    padding: 0px;
    margin: 0px;
    &:hover {
        box-shadow: 2px 4px 5px grey; 
    }
`


class Testing extends Component {
    state = {
        color: 'white'
    }


    changeColor = () => {
        this.setState({
            color: 'red'
        })
    }
    render() {
        return (
            <div>
                <table>
                    <tr>
                        <Cell 
                        onClick={this.changeColor} 
                        style={{backgroundColor:this.state.color}}></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </tr>
                    <tr>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </tr>
                    <tr>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </tr>
                    <tr>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </tr>
                    <tr>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </tr>
                    <tr>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                        <Cell></Cell>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Testing;