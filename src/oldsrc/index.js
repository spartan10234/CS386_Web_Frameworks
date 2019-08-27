import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import MovieApp from './MoviesApp';

import Table from "./Table"

import * as serviceWorker from './serviceWorker';
import Clock from "./Clock";
//import SignIn from 'SignInPage';

const titles = ['Dessert (100g serving)', 'Calories', 'Fat (g)', 'Carbs (g)', 'Protein (g)'];
const attributes = ['name', 'calories', 'fat', 'carbs', 'protein'];
const newTitles = []
//this.state.Allmovies.map((keys, idx) => newTitles.push(keys.movieTitle))

ReactDOM.render(
    <BrowserRouter>
        <MovieApp/>
    <Table titles={titles} attributes={attributes}/>
    </BrowserRouter>,
        document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
