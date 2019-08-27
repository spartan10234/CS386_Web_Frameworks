import React from 'react';
import PropTypes from 'prop-types';
/*import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';*/
import CssBaseline from '@material-ui/core/CssBaseline';
/*
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';*/
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
//import withStyles from '@material-ui/core/styles/withStyles';
import lightPurple from '@material-ui/core/colors/deepPurple';
import lightPink from '@material-ui/core/colors/pink';
import withStyles from "@material-ui/core/styles/withStyles";
import {Divider} from "@material-ui/core";

const primary = lightPurple[300];
const secondary = lightPink[200];
const styles = theme =>({
    main: {
        background: primary,
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 'auto'
    },
    paper: {
        background: secondary,
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 4}px ${theme.spacing.unit * 3}px`,
    },
    paper2:{
    background: secondary,
    marginTop: theme.spacing.unit * 10,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'right',
    padding: `${theme.spacing.unit * 3 }px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    }
});

function ProfileTab(props){
    const {classes} = props;
    return (
        <main className={classes.main}>
            <CssBaseline />
            <Typography component="h1" variant="h5">
                WELCOME
            </Typography>

            <Paper className={classes.paper}>

                <Typography component="h1" variant="h5">
                    HELLOOOO
                </Typography>
                <Typography component="h1" variant="h5">
                    HELLOOOO
                </Typography>
                <Typography component="h1" variant="h5">
                    HELLOOOO
                </Typography>
                <Typography component="h1" variant="h5">
                HELLOOOO
                </Typography>
                <Typography component="h1" variant="h5">
                HELLOOOO
            </Typography>
            </Paper>
            <Paper className={classes.paper2}>
                <Typography component="h1" variant="h5">
                    HELLOOOO
                </Typography>
                <Typography component="h1" variant="h5">
                    HELLOOOO
                </Typography>
                <Typography component="h1" variant="h5">
                    HELLOOOO
                </Typography>
            </Paper>


        </main>
    );
}

ProfileTab.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileTab);