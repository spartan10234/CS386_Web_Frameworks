import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route, Link} from 'react-router-dom';
import axios from './ConfigAxios';
import authProvider from './authProvider';

//Home
const Home = () => (<div>Home</div>);
const Schools = () => (<div>Schools</div>);

//Departments
const CompSci = () => (<h2>Computer Science Department</h2>);
const Chemistry = () => (<h2>Chemistry Department</h2>);
const Mathematics = () => (<h2>Mathematics Department</h2>);

//link to departments
const Departments = ({match}) => (
    //`${match.url}/cs`}
    <div>
      <h2>Departments</h2>
      <ol>
        <li><Link to="/departments/cs">Computer Science</Link></li>
        <li><Link to="/departments/chemistry">Chemistry</Link></li>
        <li><Link to="/departments/mathematics">Mathematics</Link></li>
      </ol>

      <Route exact path={`${match.url}/cs`} component={CompSci}/>
      <Route exact path={"/departments/chemistry"} component={Chemistry}/>
      <Route exact path={"/departments/mathematics"} component={Mathematics}/>

    </div>
);


const Majors = () => (<div>Majors</div>);

class App extends Component {
    componentDidMount() {
        axios.get('course-catalog/CS/315').then(result =>
            console.log(result.data));
    }


    render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/schools"> Schools </Link>
          </li>
          <li>
            <Link to="/departments"> Departments </Link>
          </li>
          <li>
            <Link to="/majors"> Majors </Link>
          </li>
        </ul>

        <Route path="/" component={Home}/>
        <Route path="/schools" component={Schools}/>
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

export default App;
