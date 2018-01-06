import React, { Component } from 'react';
import styled from 'styled-components'

const Cell = styled.div`
    height: 40px;
    width: 40px;
    background-color: blue;
    border: solid thin;
    display: inline-block;
    margin: 0px;
    padding: 20px;
`



class GridCell extends Component {
    render() {
        return (
           
                <Cell>

                    {/* <p>{this.props.x}, {this.props.y}</p> */}
                </Cell>
           
        );
    }
}

export default GridCell;