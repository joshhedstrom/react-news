import React from 'react';

const ArticleContainer = props => {
  return props.results.map(result => (
    <div key={result._id}>
      <a href={result.web_url}><h3>{result.headline.main}</h3></a>
      <p>{result.snippet}</p>
      <p>{result.pub_date}</p>
      <button
        id={result._id}
        title={result.headline.main}
        url={result.multimedia.web_url}
        date={result.pub_date}
        onClick={props.saveArticle}
      >
        Save
      </button>
      <button
        id={result._id}
        title={result.headline.main}
        url={result.multimedia.web_url}
        date={result.pub_date}
        onClick={props.deleteArticle}
      >
        Delete
      </button>
    </div>
  ));
};
export default ArticleContainer;
