import React from 'react';
import Login from './pages/Containers/Login';

import AdministratorsContainerView from './pages/Administrator/AdministratorsContainerView';
import StudentContainerView from './pages/Containers/StudentsContainerView';

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };

    }

    acceptUserRecord = (user) => {
        this.setState({
            user
        });
    }

    componentWillUnmount() {
        console.log('Main is about to unmount.');
    }

    render() {
	const { user } = this.state;
        if( ! user )
            return <Login userAuthenticated={this.acceptUserRecord} />

        console.log('user is', user);
        return (<div>
		{
		    user.role === 'admin' ?
                <AdministratorsContainerView user={user} /> :
                       <StudentContainerView user={user} />
                }

        </div>)
    }
}

export default Main
