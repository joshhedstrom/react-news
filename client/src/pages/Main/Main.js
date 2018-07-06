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
  };

  componentDidMount() {}

  handleOnClick = event => {
    event.preventDefault();
    console.log(event);
    console.log(this);
  };

  loadArticles = () => {};

  render() {
    return (
      <div>
        <Header />
        <Form
          submitAction={this.handleOnClick.bind()}
          endAction={this.handleInputChange.bind()}
          startAction={this.handleInputChange.bind()}
          topicAction={this.handleInputChange.bind()}
        />
      </div>
    );
  }
}

export default Main;
