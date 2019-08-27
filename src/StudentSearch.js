import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import axios from './ConfigAxios';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button'
import InputBase from '@material-ui/core/InputBase'




const ITEM_HEIGHT = 48;


class LongMenu extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            anchorEl: null,
            students: [],
            searchString: ' ',

        };
    }
    componentDidMount() {
        let studentResults = [];
        axios.get('http://blue.cs.sonoma.edu:8260/api/v1/users/students').then(result => {studentResults = result.data;
            this.setState({students:studentResults});
            console.log('results: ', result.data);})
            .catch(function (error) {
                console.log(error)

            })
    }

    setSearchString(event){
        console.log(event.target.value);
        this.setState({searchString:event.target.value})
    }

    handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };


    render() {
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div>

                <Button
                    aria-owns={open ? 'long-menu' : undefined}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    List of Students
                </Button>
                <Menu

                    id="long-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={this.handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 10,
                            width: 250,
                            marginLeft:20,
                            align: 'center',

                        },
                    }}
                >
                    <InputBase  margin='dense' placeholder='Search...'
                        onChange={this.setSearchString} justify="space-around"
                    />
                    <IconButton  aria-label="Search">
                        <SearchIcon />
                    </IconButton>

                    <ul> {this.state.students.map((keys, idx)=> {return (
                        <MenuItem key={idx}>
                            {keys.student_fName}
                        </MenuItem>)})}
                    </ul>


                   {/* {options.map(option => (
                        <MenuItem key={option}  onClick={this.handleClose}>
                            {option}
                        </MenuItem>
                    ))}*/}
                </Menu>
            </div>
        );
    }
}

export default LongMenu;
