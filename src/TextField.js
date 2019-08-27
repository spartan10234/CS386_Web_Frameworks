import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import BlueGrey from '@material-ui/core/colors/blueGrey';
import TimeDatePickers from "./TimeDatePickers";


const primary1 = BlueGrey[400];
const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    paperText: {
        marginTop: theme.spacing.unit * 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    button:{
        display: 'flex',
        height: 50,
        marginTop: 20,
        marginLeft:750,
    },

    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});



class OutlinedTextFields extends React.Component {

    render() {
        const { classes } = this.props;

        return (

            <Paper className={classes.paperText}>
                <form className={classes.container} noValidate autoComplete="off">
                    <TextField
                        id="Last-Name"
                        label="Last Name"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />
                    <TimeDatePickers/>
                    
                    <TextField
                        id="adviser-id"
                        label="ID Number"
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                    />


                    <Button variant="contained" color='Primary1' className={classes.button}>

                        Add
                    </Button>

                </form>
            </Paper>
        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);