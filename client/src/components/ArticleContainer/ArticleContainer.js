import React from 'react';

const ArticleContainer = props => {
  {props.results.map(result => (
    <div key={result} className="list-group-item">
      <h4>{result.headline}</h4>
      <p>{result.multimedia.snippet}</p>
      <p>{result.multimedia.date}</p>
      <a href={result.multimedia.web_url}>Article Link</a>
      {/* <img alt="" src={result} /> */}
    </div>
  ));
}
};

export default ArticleContainer;
