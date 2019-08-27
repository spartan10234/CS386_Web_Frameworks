import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from './ConfigAxios';
import authProvider from './authProvider';
import { fetchUtils, Admin, Resource } from 'react-admin';
import simpleRestProvider from 'ra-data-simple-rest';
//import SignIn from 'SignInPage';
import Login from './pages/Containers/Login';

import AdministratorsContainerView from './pages/Administrator/AdministratorsContainerView';
import StudentContainerView from './pages/Containers/StudentsContainerView';


//dataprovider
const httpClient = (url, options = {}) => {
    if (!options.headers) {
        options.headers = new Headers({ Accept: 'application/json' });
    }
    const token = localStorage.getItem('token');
    options.headers.set('Authorization', `Bearer ${token}`);
    // add your own headers here
    //options.headers.set('X-Custom-Header', 'foobar');
    //return fetchUtils.fetchJson(url, options);

    return fetchUtils.fetchJson(url, options);
};
const dataProvider = simpleRestProvider('http://blue.cs.sonoma.edu:8153', httpClient);

//Home
const Home = () => (<div>Home</div>);
const Movies = () => (<div>Movies </div>);

//Departments
const MovieRatings = () => (<h2>Movie Ratings</h2>);
const Genre = () => (<h2>Genre</h2>);
const Directors = () => (<h2>Directors</h2>);

//link to departments
const Departments = ({match}) => (
    //`${match.url}/cs`}
    <div>
      <h2>Departments</h2>
      <ol>
        <li><Link to="/departments/MovieRatings">Movie Ratings</Link></li>
        <li><Link to="/departments/Genre">Genres</Link></li>
        <li><Link to="/departments/Directors">Directors</Link></li>
      </ol>

      <Route exact path={`${match.url}/MovieRatings`} component={MovieRatings}/>
      <Route exact path={"/departments/Genre"} component={Genre}/>
      <Route exact path={"/departments/Directors"} component={Directors}/>

    </div>
);


const Majors = () => (<div>Majors</div>);


class MoviesApp extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    Allmovies:[],
        user: null
	}
    }
    acceptUserRecord = (user) => {
        this.setState({
            user
        });
    };

    componentDidMount() {
	let endResults = [];
        axios.get('http://blue.cs.sonoma.edu:8153/api/v1/movies').then(result => {endResults = result.data;
            this.setState({Allmovies: endResults});
	console.log("results: ", result.data);})
	.catch(function (error) {
        console.log(error);
	});
	//this.setState({Allmovies: endResults});
	//console.log("componentDidMount() called. Results:  ",this.state.Allmovies )
    }
    componentWillUnmount() {
        console.log('Main is about to unmount.');
    }


//<Admin dataProvider={dataProvider} authProvider={authProvider}>
//<Resource name="users" />
//</Admin>
    render() {
        const { user } = this.state;
        if( ! user )
            return <Login userAuthenticated={this.acceptUserRecord} />
        console.log('user is', user);

	return (
        <div className="MoviesApp">
            {console.log("We are in render")}
            user.role === 'student' ?
            <AdministratorsContainerView user={user}/> :
            <StudentContainerView user={user}/>

            <ul>
                <li>
                    <Link to="/"> Home </Link>
                </li>
                <li>
                    <Link to="/movies"> Movies </Link>
                    <ul>{this.state.Allmovies.map((keys, idx) => {
                        return (
                            <div key={idx}>
                                <h1>{keys.movieTitle}</h1>
                            </div>)
                    })}
                    </ul>

                </li>
                <li>
                    <Link to="/departments"> Departments </Link>
                </li>
                <li>
                    <Link to="/majors"> Majors </Link>
                </li>
            </ul>

            <Route path="/" component={Home}/>
            <Route path="/movies" component={Movies}/>
            <Route path="/departments" component={Departments}/>
            <Route path="/majors" component={Majors}/>
        </div>
    );
  }
}





/*<header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  <p>
    Edit <code>src/App.js</code> and save to reload.
  </p>
  <a
      className="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
  >
    Learn React
  </a>
</header>*/

export default MoviesApp;
