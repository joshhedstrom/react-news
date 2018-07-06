import React, { Component } from 'react';
import './Main.css';
import Form from '../../components/Form';
import Header from '../../components/Header';

class Main extends Component {
  state = {
    query: {
      topic: '',
      startDate: '',
      endDate: ''
    }

  }

  componentDidMount() {

  }

  handleOnClick = event => {
    event.preventDefault()
    console.log(event)

  }

  loadArticles = () => {

  }

  render() {
    return (
      <div>
        <Header/>
        <Form
        action={this.handleOnClick.bind()}
        />
      </div>
    );
  }
}

export default Main;
