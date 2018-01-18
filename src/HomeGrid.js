import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, {RadioGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import { render } from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: '100%',
        overflowY: 'auto',
    },
};

class HomeGrid extends React.Component {
    state = {
        spacing:'16',
    };

    render(){

        return (
            <div style={styles.root}>
    <GridList cellHeight={180} style = {styles.gridList}>
    <GridTile>
        <h1>Grid 1</h1>
        </GridTile>
        <GridTile>
        <h1>Grid 2</h1>
        </GridTile>
        </GridList>
        </div>

    );
    }

}

export default HomeGrid