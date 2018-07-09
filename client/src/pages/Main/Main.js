import React, { Component } from 'react';
import API from '../../utils/API';
import Header from '../../components/Header';
import Form from '../../components/Form';
import ArticleContainer from '../../components/ArticleContainer';
import Footer from '../../components/Footer';
import './Main.css';

class Main extends Component {
  state = {
    topic: '',
    startDate: '',
    endDate: '',
    results: [],
    savedArticles: [] 
  }

  componentWillMount() {
    // this.loadArticles();
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.loadArticles();
  }
  
  handleInputChange = event => {    
    this.setState({[event.target.id]: event.target.value})
  }

  resetData = () => {
    this.setState({topic: '', startDate: '', endDate: ''})
  }
  
  loadArticles = () => {
    API.getArticles(this.state.topic, this.state.startDate, this.state.endDate)
      .then(res => {
        this.setState({ results: res.data.response.docs });
        this.resetData();
      })
      .catch(err => console.log(err));
  }

  saveArticle = event => {
    let id = event.target.id
    API.saveArticle(id)
       .then(res => console.log('THE RES ', res))
       .catch(err => console.log(err))
    

  }

  deleteArticle = event => {
    let id = event.target.id
    API.deleteArticle(id)
      .then(res => console.log('THE RES ', res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Header />
        <Form
          submitAction={this.handleOnSubmit.bind()}
          endAction={this.handleInputChange.bind()}
          startAction={this.handleInputChange.bind()}
          topicAction={this.handleInputChange.bind()}
        />
        <ArticleContainer 
        results={this.state.results}
        saveArticle={this.saveArticle.bind()}
        deleteArticle={this.deleteArticle.bind()}
        />
        <Footer />
      </div>
    );
  }
}

export default Main;
