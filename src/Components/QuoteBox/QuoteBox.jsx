import React, {Component} from 'react';
import './QuoteBox.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(faTwitter);
export default class QuoteBox extends Component {
    render() {
    return (
      <div className="quote">
        <div className='quoteText'>
          <h3>{this.props.quote}</h3>
          <p className="author">{this.props.author}</p>
        </div>
          <div className='buttons'>
          <a href={`https://twitter.com/intent/tweet?text=${this.props.quote}&hashtags=outbright`} target="_blank" rel="noopener noreferrer">  
            <button 
                target="_blank"
                className='twitterButton'
                >
                <FontAwesomeIcon 
                  className="twitterIcon"
                  icon={faTwitter}
                  color="#9B870C"
                  size="3x"
                />
            </button>
            </a>  
            <button className="customButton" onClick={this.props.getQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}
