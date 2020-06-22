import React, {Component } from 'react';
import './App.css';
import QuoteBox from './Components/QuoteBox/QuoteBox';
import Share from './Components/Share/Share';
import New from './Components/New/New';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faKey, faSun } from '@fortawesome/free-solid-svg-icons';

library.add(faKey, faSun);


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      quote: '',
      author: ''
    }
    this.num = null; 
  }
  

  componentDidMount() {
    this.getQuote();
  }

  

  getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then(response=> response.json())
    .then(data=>this.setState({quotes: data}, () =>{
      let quotation = this.state.quotes.content;
    let quoteAuthor = this.state.quotes.author;
    if (quoteAuthor) {
      this.setState({
        quote: quotation,
        author: quoteAuthor
      })
    } else {
      this.setState({
        quote: quotation,
        author: 'Anonymous'
      })
    }  
    }))
  }
    
  render() {
    return (
      <div className="container_div">
      <div className='box'>
        <h1>Brighten Your Day</h1>
        <FontAwesomeIcon 
          icon="sun"
          color="#9B870C"
          size="4x"
        />
        <QuoteBox
          // getQuote = {this.getQuote}
          getQuote = {this.getQuote}
          quote = {this.state.quote}
          author = {this.state.author}
        />
        <Share/>
        <New/>
      </div>
      
    </div>
    )
  }
}
