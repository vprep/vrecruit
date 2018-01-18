import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Radio, {RadioGroup } from 'material-ui/RadioButton';
import Paper from 'material-ui/Paper';
import { render } from 'react-dom';
import { Grid,Row, Col} from 'react-bootstrap'

const styles = theme => ({
    root: {
        flexGrow:1,
    },
    paper: {
        height:140,
        width:100,
    },
    control:{
        padding:theme.spacing.unit * 2,
    },
});

class HomeGrid extends React.Component {
    state = {
        spacing:'16',
    };

    render(){
        const { classes } = this.props;
        const { spacing } = this.state;

        return (
            <Grid>
                <Row className="show-grid">
                    <Col sm={6}>
                        <h1>Grid</h1>
                    </Col>
                    <Col sm={6}>
                        <h1>Grid</h1>
                    </Col>
                </Row>
            </Grid>

        );
    }

}

export default HomeGrid