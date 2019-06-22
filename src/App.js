import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './all.css';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import config from './config/configKey'
import Edit from './components/Edit';


firebase.initializeApp(config);

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }
  }

  gettingWholeData = () => {
    firebase.database().ref().child("WholeData").on('value', (snap) => {
      if (snap.val()) {
        let data = Object.values(snap.val())
        this.setState({
          data,
        })
      }
    })
  }

  componentWillMount() {
    this.gettingWholeData()
  }

  render() {
    return (
      <div>
        <Router>
          <Route
            exact path="/"
            render={() => <Edit
              state={this.state}
            />} />
        </Router>
      </div>
    )
  }
}

export default App;
