import React, { Component } from 'react';
import './Main.css';
import Form from '../../components/Form';
import Header from '../../components/Header';

const styles = theme => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    backgroundColor: 'blue',
  }
});

class Main extends Component {
  state = {}

  componentDidMount() {}

  loadArticles = () => {}

  render() {
    return (
      <div>
        <Header/>
        <Form/>
      </div>
    );
  }
}

export default Main;
