import React from 'react';
import {render} from 'react-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import {Subheader} from 'material-ui/Subheader';

const styles = {
    root:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-aorund',
    },
    gridList: {
        width:'100%',
        height:'100%!important',
        overflowY: 'auto',
    },
    title: {
        fontSize: '18px',
        paddingLeft: '12%',
    }

}


class ManagePosition extends React.Component {



    render() {
        return(
            <div style={styles.root}>
                <GridList cellHeight='100%' style = {styles.gridList}>
                    <GridTile className="grid-tile">
                        <div className="grid-panel">
                        </div>
                    </GridTile>
                    <GridTile className="grid-tile">
                        <div className="grid-panel">
                        </div>
                    </GridTile>
                </GridList>
            </div>
        );
    }
}

export default ManagePosition;