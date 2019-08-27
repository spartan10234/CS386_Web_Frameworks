import React from 'react';
import API from "../../APIInterface/APIInterface";

class Student extends React.Component {
    constructor(props) {
	super(props);
	this.state = {
	    courses: [],
	    backFromDB: false
	}
    }

    componentDidMount() {
        const api = new API();
        api.getCourses('2193', 'CS')
            .then(courses => {
		    console.log('componentDidMount of Student. Back from DB call. Number of records in courses is', courses.data);
		    this.setState({
                            backFromDB: true,
			    courses: courses.data
                    });
                }).catch(error => {
                    console.log('getCourses route threw an error:', error);
                    this.setState({
                            backFromDB: true,
			    courses: []
                    });
                });
        this.setState({inputHing: "Checking..."});

	
    }

    render() {
	const {courses} = this.state;
	const numCourses = courses ? courses.length : 0;
	return <p>{`In student container view. Number of courses ${numCourses}.`}</p>
    }
}


export default Student;
