import React from 'react';
import {withStyles} from 'material-ui/styles';
import {render} from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import {Subheader} from 'material-ui/Subheader';
import ListExampleSimple from './ListExampleSimple';
import UpComingRecruitments from './UpComingRecruitments';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: '100%!important',
        overflowY: 'auto',
    },
    title: {
        fontSize: '18px',
        paddingLeft: '12%',
    }
};

class HomeGrid extends React.Component {
    state = {
        spacing:'16',
    };


    render(){

        return (
            <div style={styles.root}>
    <GridList cellHeight='100%' style = {styles.gridList}>
        <GridTile className="grid-tile">
            <div className="grid-panel">
                <ListExampleSimple/>
            </div>
        </GridTile>
        <GridTile className="grid-tile">
        <div className="grid-panel">
            <UpComingRecruitments/>
        </div>
        </GridTile>
        </GridList>
        </div>

    );
    }

}

export default HomeGrid