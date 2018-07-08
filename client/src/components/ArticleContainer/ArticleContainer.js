import React from 'react';

const ArticleContainer = props => {
  return props.results.map(result => (
    <div key={result.id}>
      <h4 href={result.multimedia.web_url}>{result.headline.main}</h4>
      <p>{result.snippet}</p>
      <p>{result.date}</p>
      <a >Link</a>
    </div>
  ));
};
export default ArticleContainer;
