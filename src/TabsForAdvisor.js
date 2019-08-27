import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import TableOne from './TableOne';
import TableTwo from './TableTwo';
import TextField from './TextField';
import Profile from './Profile';

import BlueGrey from '@material-ui/core/colors/blueGrey';
import 'typeface-roboto';


const primary1 = BlueGrey[400];
const primary2 = BlueGrey[700];

function TabContainer({ children, dir }) {
    return (
        <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
            {children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
    dir: PropTypes.string.isRequired,
};

const styles = theme => ({
    main:{backgroundColor: primary2,
        width: '100%',
        height: 1500,
    },
    root: {
        backgroundColor: primary1,
        width: '100%',
        display:'block',
        marginLeft:theme.spacing.unit * 3,
        marginRight:theme.spacing.unit * 3,
        [theme.breakpoints.up(500 + theme.spacing.unit * 4 * 2 )]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto'
        },
    },
});

class FullWidthTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes, theme } = this.props;

        return (
            <main className={classes.main}>
            <div className={classes.root} >
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.value}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                    >
                        <Tab label="View Appointments" />
                        <Tab label="Create Blocks" />
                        <Tab label="Profile" />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={this.state.value}
                    onChangeIndex={this.handleChangeIndex}
                >
                    <TabContainer dir={theme.direction}>
                        <Typography component="h1"
                                    variant="title"
                                    align='center'>
                            Current Scheduled Appointments
                        </Typography>
                        <TableOne/>
                        <div height="20px">&nbsp;</div>
                        <Typography  component="h1"
                                     variant="title"
                                     align='center'
                                     style={{whiteSpace:'pre-line'}}>
                            Student Requested Appointments
                        </Typography>
                        <TableTwo/>
                    </TabContainer>

                    <TabContainer dir={theme.direction}>
                        <Typography
                                    component='title'
                                     variant="title"
                                     align='center'
                                     >
                            Enter Availability for Advising Appointments

                        </Typography>
                        <TextField/>

                    </TabContainer>

                    <TabContainer dir={theme.direction}>
                        <Profile/>


                    </TabContainer>
                </SwipeableViews>


            </div>
    </main>
        );
    }
}

FullWidthTabs.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);