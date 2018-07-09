import React from 'react';

const ArticleContainer = props => {
  return props.results.map(result => (
    <div key={result.id}>
      <h4 href={result.multimedia.web_url}>{result.headline.main}</h4>
      <p>{result.snippet}</p>
      <p>{result.date}</p>
      <button onClick={props.saveArticle} >Save</button>
      <button onClick={props.deleteArticle}>Delete</button>
    </div>
  ));
};
export default ArticleContainer;
