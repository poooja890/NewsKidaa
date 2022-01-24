
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  apiKey = "11e56d04fe2744c782d3c6e7d9dc08ff"

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height='3px'
            progress={this.state.progress}

          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={6} country="in" category="General" /></Route>
            <Route exact path="/Home"><News setProgress={this.setProgress} apiKey={this.apiKey} key="General" pageSize={6} country="in" category="General" /></Route>
            <Route exact path="/Business"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={6} country="in" category="Business" /></Route>
            <Route exact path="/Entertainment"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={6} country="in" category="Entertainment" /></Route>
            <Route exact path="/Health"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={6} country="in" category="Health" /></Route>
            <Route exact path="/Science"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={6} country="in" category="Science" /></Route>
            <Route exact path="/Technology"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={6} country="in" category="Technology" /></Route>
            <Route exact path="/Sports"><News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={6} country="in" category="Sports" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}



